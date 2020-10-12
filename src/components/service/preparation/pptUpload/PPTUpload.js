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
  const [uploadON, setUploadON] = useState(false)
  const [uploadOK, setUploadOK] = useState(false)

  const handleUpload = async () => {
    try {
      setUploadON(true)
      const form = new FormData()
      form.append('ppt', ppt.current.files[0])
      setPPT(ppt.current.files[0])
      await uploadPPTAPI(form)
      setUploadON(false)
      setUploadOK(true)
    } catch (err) {
      console.log(err)
    }
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
      {uploadOK || uploadON ? (
        uploadON ? (
          <div className={cx('input-wrapper')}>
            <img src={iconUpload} alt="pdf" />
            <p className={cx('input-description')}>업로드 중</p>
          </div>
        ) : (
          <div className={cx('input-wrapper')}>
            <img src={iconUploadDone} alt="pdf" />
            <p className={cx('input-description')}>업로드 완료!</p>
          </div>
        )
      ) : (
        <div className={cx('input-wrapper')}>
          <img src={iconUpload} alt="pdf" />
          <label htmlFor="pdf">발표자료 업로드하기</label>
          <input
            type="file"
            id="pdf"
            ref={ppt}
            accept=".pdf"
            onChange={handleUpload}
          />
          <p className={cx('input-description')}>!PDF 파일만 가능해요!</p>
        </div>
      )}
      {uploadOK ? (
        <button className={cx('button')} onClick={goNext}>
          다음
        </button>
      ) : (
        <button className={cx('button')} disabled={true}>
          다음
        </button>
      )}
    </div>
  )
}

export default PPTUpload
