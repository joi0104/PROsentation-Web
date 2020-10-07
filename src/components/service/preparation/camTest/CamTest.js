import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames/bind'

import style from './CamTest.scss'
import Description from 'elements/Description.js'
import State from 'elements/State.js'
import iconNoCam from 'assets/icons/icon-no-cam.png'

const cx = classNames.bind(style)

const CamTest = ({ setCamTestOK }) => {
  const [testOK, setTestOK] = useState(false)
  const video = useRef()
  const nextButton = useRef()
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
        testedUI(stream)
      } catch (err) {
        handleError(err)
      }
    })()
  })

  const testedUI = (stream) => {
    video.current.srcObject = stream
    video.current.onloadedmetadata = (e) => {
      video.current.play()
      nextButton.current.style.backgroundColor = '#00cccc'
      handleSuccess()
    }
  }

  const handleSuccess = () => {
    setTestOK(true)
  }

  const handleError = (err) => {
    console.log(err)
  }

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
        가이드 선 안에 얼굴을 위치 시키고 체크시작 버튼을 누르면 타이머가
        나옵니다.5초의 타이머가 나오는 동시에 아래 문장으로 소리 내어
        읽어주세요.
      </Description>
      <div className={cx('content-wrapper')}>
        <video ref={video} autoPlay playsInline></video>
        <State testOK={testOK} />
      </div>
      <button className={cx('button')} ref={nextButton} onClick={goNext}>
        다음
      </button>
    </div>
  )
}

export default CamTest
