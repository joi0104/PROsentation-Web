import React, { useRef, useEffect } from 'react'
import classNames from 'classnames/bind'

import style from './Popup.scss'
import Banner from 'elements/Banner.js'

const cx = classNames.bind(style)

const Popup = ({ recordedBlobs, setRecordingOK, setPopup }) => {
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
    setRecordingOK(true)
  }

  const onDownload = () => {
    const blob = new Blob(recordedBlobs, { type: 'video/webm' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = url
    a.download = 'test.webm'
    document.body.appendChild(a)
    a.click()
    setTimeout(() => {
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    }, 100)
  }

  return (
    <div className={cx('Popup')}>
      <div className={cx('Popup-wrapper')}>
        <div className={cx('Popup-contents')}>
          <Banner>완성된 발표영상</Banner>
          <p>해당 발표영상을 분석하시겠어요?</p>
          <video ref={recordedVideo} playsInline />
          <div className={cx('button-wrapper')}>
            <button onClick={onCancel} className={cx('button-cancel')}>
              재촬영하기
            </button>
            <button onClick={onConfirm} className={cx('button-confirm')}>
              발표 영상 분석하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
