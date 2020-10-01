import React from 'react'
import classNames from 'classnames/bind'

import style from './Button2.scss'

const cx = classNames.bind(style)

const Button2 = ({ title, onClick }) => {
  return (
    <div className={cx('Button2')} onClick={onClick}>
      {title}
    </div>
  )
}

export default Button2
