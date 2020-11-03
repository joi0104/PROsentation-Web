import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames/bind'

import SoundMeter from 'utils/SoundMeter.js'
import Description from 'elements/Description.js'
import style from './MicTest.scss'
import Button from 'elements/Button.js'

const cx = classNames.bind(style)

const MicTest = ({ setMicTestOK }) => {
  const [testOK, setTestOK] = useState(false)
  const meter = useRef()

  const constraints = (window.constraints = {
    audio: true,
    video: false,
  })

  useEffect(() => {
    ;(async () => {
      try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext
        window.audioContext = new AudioContext()
        let stream = await navigator.mediaDevices.getUserMedia(constraints)
        await checkMeter(stream)
        setTestOK(true)
      } catch (err) {
        console.log(err)
      }
    })()
  })

  const checkMeter = (stream) => {
    return new Promise((resolve, reject) => {
      try {
        window.stream = stream
        const soundMeter = (window.soundMeter = new SoundMeter(
          window.audioContext
        ))
        const instantMeter = meter.current
        soundMeter.connectToSource(stream, () => {
          setInterval(() => {
            instantMeter.value = soundMeter.instant.toFixed(2)
            if (instantMeter.value >= instantMeter.high) {
              resolve()
            }
          }, 200)
        })
      } catch (err) {
        reject(err)
      }
    })
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
      <Description>
        마이크의 권한과 음량을 테스트 합니다. 마이크 권한 설정을 허용해주세요.
        아래의 문장을 읽기도 전에 테스트를 통과하셨다면, 좀 더 조용한 곳으로
        이동해주세요.
      </Description>
      <div className={cx('content-wrapper')}>
        <p className={cx('script')}>안녕하세요, 만나서 반갑습니다!</p>
        <meter high="0.001" max="0.5" value="0" ref={meter}></meter>
      </div>
      {testOK ? (
        <Button onClick={goNext}>다음</Button>
      ) : (
        <Button disabled={true}>다음</Button>
      )}
    </div>
  )
}

export default MicTest
