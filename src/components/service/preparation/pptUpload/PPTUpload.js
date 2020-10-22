import React, { useContext, useRef, useState } from 'react'
import classNames from 'classnames/bind'

import style from './PPTUpload.scss'
import iconUpload from 'assets/icons/icon-upload.png'
import iconUploadDone from 'assets/icons/icon-upload-done.png'
import Description from 'elements/Description.js'
import { uploadPPTAPI } from 'api/http.js'
import Button from 'elements/Button.js'
import ErrorPopup from 'components/ErrorPopup.js'
import UserContext from 'contexts/user.js'

const cx = classNames.bind(style)

const PPTUpload = ({ setPPTUploadOK }) => {
  const { state, actions } = useContext(UserContext)
  const [error, setError] = useState(null)
  const pptRef = useRef()
  const [uploadingON, setUploadingON] = useState(false)
  const [uploadingOK, setUploadingOK] = useState(false)

  const handleUpload = async () => {
    try {
      setUploadingON(true)
      setUploadingOK(false)
      const PPT = pptRef.current.files[0]
      const form = new FormData()
      form.append('ppt', PPT)
      form.append('serviceId', state.serviceId)
      await uploadPPTAPI(form)
      actions.setPPT(PPT)
      setUploadingON(false)
      setUploadingOK(true)
    } catch (error) {
      setError(error)
    }
  }

  const goNext = () => {
    if (uploadingOK) {
      setPPTUploadOK(true)
    } else {
      alert('발표자료를 업로드 해주세요!')
    }
  }

  return (
    <div className={cx('PPTUpload')}>
      {error ? <ErrorPopup error={error} /> : null}
      <Description>우선, 발표자료를 업로드 해주세요.</Description>
      {uploadingOK || uploadingON ? (
        uploadingON ? (
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
            ref={pptRef}
            accept=".pdf"
            onChange={handleUpload}
          />
          <p className={cx('input-description')}>!PDF 파일만 가능해요!</p>
        </div>
      )}
      {uploadingOK ? (
        <Button onClick={goNext}>다음</Button>
      ) : (
        <Button disabled={true}>다음</Button>
      )}
    </div>
  )
}

export default PPTUpload
