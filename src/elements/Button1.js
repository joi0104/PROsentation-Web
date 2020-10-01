import React from 'react'
import classNames from 'classnames/bind'

import style from './Button1.scss'

const cx = classNames.bind(style)

const Button1 = ({ title, onClick }) => {
  return (
    <div className={cx('Button1')} onClick={onClick}>
      {title}
    </div>
  )
}

export default Button1
