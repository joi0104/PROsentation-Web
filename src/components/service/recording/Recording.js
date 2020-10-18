import React, { useState } from 'react'
import classNames from 'classnames/bind'

import style from './Recording.scss'
import RecordingVideo from 'components/service/recording/RecordingVideo.js'
import PPTView from 'components/service/recording/PPTView.js'
import Banner from 'elements/Banner.js'
import iconRecON from 'assets/icons/icon-rec-on.png'
import iconRec from 'assets/icons/icon-rec.png'

const cx = classNames.bind(style)

const Recording = ({ setRecordingOK, PPT, setVideo }) => {
  const [recordingON, setRecordingON] = useState(false)

  return (
    <div className={cx('Recording')}>
      <div className={cx('Recording-wrapper')}>
        <Banner>발표 시작하기</Banner>
        <div className={cx('description')}>
          {recordingON ? (
            <img src={iconRecON} alt="icon-rec-on" />
          ) : (
            <img src={iconRec} alt="icon-rec" />
          )}
          {recordingON ? (
            <p>00님의 발표 영상이 기록 중이에요.</p>
          ) : (
            <p>00님의 발표 영상이 기록될 예정이에요. </p>
          )}
        </div>
        <div className={cx('content-wrapper')}>
          <PPTView PPT={PPT} />
          <RecordingVideo
            setRecordingON={setRecordingON}
            setRecordingOK={setRecordingOK}
            recordingON={recordingON}
            setVideo={setVideo}
          />
        </div>
      </div>
    </div>
  )
}

export default Recording
