import React, { useRef, useState } from 'react'
import classNames from 'classnames/bind'

import style from './PPTUpload.scss'
import iconUpload from 'assets/icons/icon-upload.png'
import iconUploadDone from 'assets/icons/icon-upload-done.png'
import Description from 'elements/Description.js'
import { uploadPPTAPI } from 'api/http.js'

const cx = classNames.bind(style)

const PPTUpload = ({ setPPTUploadOK, setPPT, serviceId }) => {
  const ppt = useRef()
  const inputDescription = useRef()
  const inputButton = useRef()
  const inputImg = useRef()
  const nextButton = useRef()
  const [uploadOK, setUploadOK] = useState(false)

  const handleUpload = async () => {
    try {
      uploadingUI()
      const form = new FormData()
      form.append('ppt', ppt.current.files[0])
      await uploadPPTAPI(form)
      uploadedUI()
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

  const uploadingUI = () => {
    inputDescription.current.textContent = '업로드 중'
    inputButton.current.style.display = 'none'
  }

  const uploadedUI = () => {
    inputImg.current.style.width = '80px'
    inputImg.current.style.height = '80px'
    inputImg.current.src = iconUploadDone
    inputDescription.current.textContent = '업로드 완료'
    nextButton.current.style.backgroundColor = '#00cccc'
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
      <Description>우선, 발표자료를 업로드 해주세요.</Description>
      <div className={cx('input-wrapper')}>
        <img src={iconUpload} alt="pdf" ref={inputImg} />
        <label htmlFor="pdf" ref={inputButton}>
          발표자료 업로드하기
        </label>
        <input
          type="file"
          id="pdf"
          ref={ppt}
          accept=".pdf"
          onChange={handleUpload}
        />
        <p className={cx('input-description')} ref={inputDescription}>
          !PDF 파일만 가능해요!
        </p>
      </div>
      <button className={cx('button')} onClick={goNext} ref={nextButton}>
        다음
      </button>
    </div>
  )
}

export default PPTUpload
