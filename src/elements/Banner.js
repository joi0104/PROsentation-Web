import React from 'react'
import classNames from 'classnames/bind'

import style from './Banner.scss'

const cx = classNames.bind(style)

const Banner = ({ children }) => {
  return <div className={cx('Banner')}>{children}</div>
}

export default Banner
