import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames/bind'

import style from './CamTest.scss'
import Description from 'elements/Description.js'
import iconNoCam from 'assets/icons/icon-no-cam.png'
import Button from 'elements/Button.js'

const cx = classNames.bind(style)

const CamTest = ({ setCamTestOK }) => {
  const [testOK, setTestOK] = useState(false)
  const video = useRef()

  const constraints = (window.constraints = {
    video: {
      width: { ideal: 540 },
      height: { ideal: 300 },
    },
  })

  useEffect(() => {
    ;(async () => {
      try {
        let stream = await navigator.mediaDevices.getUserMedia(constraints)
        video.current.srcObject = stream
        video.current.onloadedmetadata = (e) => {
          video.current.play()
          setTestOK(true)
        }
      } catch (err) {
        console.log(err)
      }
    })()
  })

  const goNext = () => {
    if (testOK) {
      setCamTestOK(true)
    } else {
      alert('카메라 테스트를 완료해주세요!')
    }
  }

  return (
    <div className={cx('CamTest')}>
      <Description>
        카메라의 연결을 확인합니다. 카메라 권한 설정을 허용해주세요. 단조로운
        배경에서 촬영할수록 분석이 더욱 정확해져요.
      </Description>
      <div className={cx('content-wrapper')}>
        <video ref={video} autoPlay playsInline poster={iconNoCam} />
      </div>
      {testOK ? (
        <Button onClick={goNext}>다음</Button>
      ) : (
        <Button disabled={true}>다음</Button>
      )}
    </div>
  )
}

export default CamTest
