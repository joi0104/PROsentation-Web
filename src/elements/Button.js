import React from 'react'
import classNames from 'classnames/bind'

import style from './Button.scss'

const cx = classNames.bind(style)

const Button = ({ disabled, children, onClick }) => {
  if (disabled) {
    return (
      <button className={cx('Button')} disabled={true}>
        {children}
      </button>
    )
  } else {
    return (
      <div className={cx('Button')} onClick={onClick}>
        {children}
      </div>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  onClick: null,
}

export default Button
