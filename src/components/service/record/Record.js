import React, { useState, useContext } from 'react'
import classNames from 'classnames/bind'

import style from './Record.scss'
import RecordVideo from 'components/service/record/RecordVideo.js'
import PPTView from 'components/service/record/PPTView.js'
import Banner from 'elements/Banner.js'
import iconRecON from 'assets/icons/icon-rec-on.png'
import iconRec from 'assets/icons/icon-rec.png'
import UserContext from 'contexts/user.js'

const cx = classNames.bind(style)

const Record = ({ setRecordOK }) => {
  const { state } = useContext(UserContext)
  const [recordingON, setRecordingON] = useState(false)
  const [recordingOK, setRecordingOK] = useState(false)

  return (
    <div className={cx('Record')}>
      <div className={cx('Record-wrapper')}>
        <Banner>발표 시작하기</Banner>
        <div className={cx('description')}>
          {recordingON ? (
            <img src={iconRecON} alt="icon-rec-on" />
          ) : (
            <img src={iconRec} alt="icon-rec" />
          )}
          {recordingON ? (
            <p>{state.username}님의 발표 영상이 기록 중이에요.</p>
          ) : (
            <p>{state.username}님의 발표 영상이 기록될 예정이에요. </p>
          )}
        </div>
        <div className={cx('content-wrapper')}>
          <PPTView recordingON={recordingON} recordingOK={recordingOK} />
          <RecordVideo
            setRecordingON={setRecordingON}
            setRecordingOK={setRecordingOK}
            setRecordOK={setRecordOK}
            recordingON={recordingON}
            recordingOK={recordingOK}
          />
        </div>
      </div>
    </div>
  )
}

export default Record
