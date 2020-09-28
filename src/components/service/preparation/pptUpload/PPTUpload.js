import React, { useRef, useState } from 'react'
import classNames from 'classnames/bind'

import style from './PPTUpload.scss'
import { uploadPPTAPI } from 'api/http.js'

const cx = classNames.bind(style)

const PPTUpload = ({ setPPTUploadOK, setPPT }) => {
  const ppt = useRef()
  const [uploadOK, setUploadOK] = useState(false)

  const handleUpload = async () => {
    try {
      const form = new FormData()
      form.append('ppt', ppt.current.files[0])
      await uploadPPTAPI(form)
      setPPT(ppt.current.files[0])
      handleSuccess()
    } catch (err) {
      handleError(err)
    }
  }

  const handleSuccess = () => {
    setUploadOK(true)
  }

  const handleError = (err) => {
    console.log(err)
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
      <input type="file" ref={ppt} accept=".pdf" onChange={handleUpload} />
      <p>{uploadOK ? '업로드 완료!' : '업로드 필요!'}</p>
      <button onClick={goNext}>다음</button>
    </div>
  )
}

export default PPTUpload
