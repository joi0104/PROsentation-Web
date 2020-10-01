import React from 'react'
import classNames from 'classnames/bind'

import style from './Banner.scss'

const cx = classNames.bind(style)

const Banner = ({ title }) => {
  return <div className={cx('Banner')}>{title}</div>
}

export default Banner
