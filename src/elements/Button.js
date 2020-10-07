import React from 'react'
import classNames from 'classnames/bind'

import style from './Button.scss'

const cx = classNames.bind(style)

const Button = ({ title, onClick }) => {
  return (
    <div className={cx('Button')} onClick={onClick}>
      {title}
    </div>
  )
}

export default Button
