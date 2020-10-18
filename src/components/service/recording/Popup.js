import React, { useRef, useEffect } from 'react'
import classNames from 'classnames/bind'

import style from './Popup.scss'
import Banner from 'elements/Banner.js'
import Button from 'elements/Button.js'
import Button2 from 'elements/Button2.js'

const cx = classNames.bind(style)

const Popup = ({ recordedBlobs, setRecordingOK, setPopup, setVideo }) => {
  const recordedVideo = useRef()

  useEffect(() => {
    const superBuffer = new Blob(recordedBlobs, { type: 'video/webm' })
    recordedVideo.current.src = null
    recordedVideo.current.srcObject = null
    recordedVideo.current.src = window.URL.createObjectURL(superBuffer)
    recordedVideo.current.controls = true
  }, [recordedBlobs])

  const onCancel = () => {
    setPopup(false)
  }

  const onConfirm = () => {
    setVideo(recordedBlobs)
    setRecordingOK(true)
  }

  return (
    <div className={cx('Popup')}>
      <div className={cx('Popup-wrapper')}>
        <div className={cx('Popup-contents')}>
          <Banner>완성된 발표영상</Banner>
          <p>해당 발표영상을 분석하시겠어요?</p>
          <video ref={recordedVideo} playsInline />
          <div className={cx('button-wrapper')}>
            <Button2 onClick={onCancel}>재촬영하기</Button2>
            <Button onClick={onConfirm}>발표 영상 분석하기</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
