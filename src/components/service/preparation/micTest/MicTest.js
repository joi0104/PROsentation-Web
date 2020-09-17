import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import SoundMeter from 'utils/SoundMeter.js'
import style from './MicTest.scss'

const cx = classNames.bind(style)

const MicTest = ({ setMicTestOK }) => {
  const [testOK, setTestOK] = useState(false)
  const constraints = (window.constraints = {
    audio: true,
    video: false,
  })

  useEffect(() => {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext
      window.audioContext = new AudioContext()
    } catch (e) {
      alert('API 를 지원하지 않는 브라우저 입니다')
    }
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(handleSuccess)
      .catch(handleError)
  })

  const handleSuccess = (stream) => {
    window.stream = stream
    const soundMeter = (window.soundMeter = new SoundMeter(window.audioContext))
    const instantMeter = document.querySelector('meter')
    soundMeter.connectToSource(stream, () => {
      setInterval(() => {
        instantMeter.value = soundMeter.instant.toFixed(2)
        if (instantMeter.value >= instantMeter.high) {
          setTestOK(true)
        }
      }, 200)
    })
  }

  const handleError = (err) => {
    if (err.name === 'PermissionDeniedError') {
      alert('마이크 요청을 허가해주세요!')
    } else {
      alert(`에러 발생!${err.name}`)
    }
  }

  const goNext = () => {
    if (testOK) {
      setMicTestOK(true)
    } else {
      alert('마이크 테스트를 완료해주세요!')
    }
  }

  return (
    <div className={cx('MicTest')}>
      <meter high="0.1" max="0.5" value="0"></meter>
      <p>{testOK ? '연결완료!' : '연결필요!'}</p>
      <button onClick={goNext}>다음</button>
    </div>
  )
}

export default MicTest
