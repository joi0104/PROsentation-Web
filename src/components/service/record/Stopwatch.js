import React, { useRef, useEffect } from 'react'
import classNames from 'classnames/bind'
import moment from 'moment'

import style from './Stopwatch.scss'

const cx = classNames.bind(style)

var runClock = null
let counter = 0

const Stopwatch = ({ recordingON }) => {
  const time = useRef()

  useEffect(() => {
    if (recordingON) {
      runClock = setInterval(() => {
        counter++
        displayTime()
      }, 1000)
    } else {
      if (runClock) {
        clearInterval(runClock)
      }
      counter = 0
      displayTime()
    }
  }, [recordingON])

  const displayTime = () => {
    time.current.innerHTML = moment()
      .hour(0)
      .minute(0)
      .second(counter)
      .format('HH : mm : ss')
  }

  return (
    <div className={cx('Stopwatch')}>
      <p className={cx('title')}>발표 시간</p>
      <div className={cx('time')} ref={time}></div>
      <div className={cx('line')} />
    </div>
  )
}

export default Stopwatch
