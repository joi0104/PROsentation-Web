import React, { useRef, useState } from 'react'
import classNames from 'classnames/bind'

import style from './PPTUpload.scss'
import { uploadPPTAPI } from 'api/http.js'

const cx = classNames.bind(style)

const PPTUpload = ({ setPPTUploadOK }) => {
  const fileForm = useRef()
  const [uploadOK, setUploadOK] = useState(false)

  const handleUpload = async () => {
    try {
      const form = new FormData()
      const file = fileForm.current.files[0]
      form.append('ppt', file)
      await uploadPPTAPI(form)
      handleSuccess()
    } catch {
      handleError()
    }
  }

  const handleSuccess = () => {
    setUploadOK(true)
  }

  const handleError = () => {
    alert('에러')
  }

  const goNext = () => {
    if (uploadOK) {
      setPPTUploadOK(true)
    } else {
      alert('발표자료를 업로드 해주세요!')
    }
  }

  return (
    <div className={cx('PPTUpload')}>
      <input type="file" ref={fileForm} accept=".pdf" onChange={handleUpload} />
      <p>{uploadOK ? '업로드 완료!' : '업로드 필요!'}</p>
      <button onClick={goNext}>다음</button>
    </div>
  )
}

export default PPTUpload
