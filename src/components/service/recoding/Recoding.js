import React, { useEffect } from 'react'
import classNames from 'classnames/bind'

import style from './Recoding.scss'
import RecodingVideo from 'components/service/recoding/RecodingVideo.js'
import PPTView from 'components/service/recoding/PPTView.js'

const cx = classNames.bind(style)

const Recoding = ({ setRecodingOK, serviceId, PPT }) => {
  const goNext = () => {
    setRecodingOK(true)
  }

  return (
    <div className={cx('Recoding')}>
      <PPTView PPT={PPT} />
      <RecodingVideo />
      <button onClick={goNext}>완료</button>
    </div>
  )
}

export default Recoding
