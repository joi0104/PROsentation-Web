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
      <p className={cx('description')}>
        가이드 선 안에 얼굴을 위치 시키고 체크시작 버튼을 누르면 타이머가
        나옵니다.
      </p>
      <p className={cx('description')}>
        5초의 타이머가 나오는 동시에 아래 문장으로 소리 내어 읽어주세요.
      </p>
      <p className={cx('script')}>안녕하세요, 만나서 반갑습니다!</p>
      <meter high="0.1" max="0.5" value="0"></meter>
      <p className={cx('state')}>{testOK ? '연결완료!' : '연결필요!'}</p>
      <button className={cx('button')} onClick={goNext}>
        다음
      </button>
    </div>
  )
}

export default MicTest
