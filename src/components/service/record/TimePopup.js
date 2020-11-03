import React from 'react'
import classNames from 'classnames'

import style from './TimePopup.scss'

const cx = classNames.bind(style)

const TimePopup = ({ children }) => {
  return <div className={cx('TimePopup')}>{children}</div>
}

export default TimePopup
