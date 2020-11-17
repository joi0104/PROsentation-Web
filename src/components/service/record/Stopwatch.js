import React, { useRef, useEffect, useContext, useState } from 'react'
import classNames from 'classnames/bind'
import moment from 'moment'

import style from './Stopwatch.scss'
import UserContext from 'contexts/user.js'
import TimePopup from 'components/service/record/TimePopup.js'

const cx = classNames.bind(style)

let runClock = null

const Stopwatch = ({ recordingON, popupOK }) => {
  const timeRef = useRef()
  const [counter, setCounter] = useState(0)
  const { state } = useContext(UserContext)
  const time = state.time
  const intro = time * 0.2
  const finish = time * 0.9

  useEffect(() => {
    if (recordingON) {
      runClock = setInterval(() => {
        setCounter((preCounter) => preCounter + 1)
      }, 1000)
    } else {
      if (runClock) {
        clearInterval(runClock)
      }
      setCounter(0)
    }
  }, [recordingON])

  useEffect(() => {
    timeRef.current.innerHTML = moment()
      .hour(0)
      .minute(0)
      .second(counter)
      .format('HH : mm : ss')
  }, [counter])

  return (
    <div className={cx('Stopwatch')}>
      <p className={cx('title')}>발표 시간</p>
      <div className={cx('time')} ref={timeRef}></div>
      <div className={cx('line')} />
      {intro * 60 <= counter && popupOK ? (
        <TimePopup>
          {intro}분이 지났어요. 슬슬 본문으로 넘어가 볼까요?
        </TimePopup>
      ) : null}
      {finish * 60 <= counter && popupOK ? (
        <TimePopup>{finish}분이 지났어요. 마무리를 할 시간이에요.</TimePopup>
      ) : null}
    </div>
  )
}

export default Stopwatch
