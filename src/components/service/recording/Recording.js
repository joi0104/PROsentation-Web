import React from 'react'
import classNames from 'classnames/bind'

import style from './Recording.scss'
import RecordingVideo from 'components/service/recording/RecordingVideo.js'
import PPTView from 'components/service/recording/PPTView.js'

const cx = classNames.bind(style)

const Recording = ({ setRecordingOK, serviceId, PPT }) => {
  const goNext = () => {
    setRecordingOK(true)
  }

  return (
    <div className={cx('Recording')}>
      <PPTView PPT={PPT} />
      <RecordingVideo />
      <button onClick={goNext}>완료</button>
    </div>
  )
}

export default Recording
