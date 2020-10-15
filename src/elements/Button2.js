import React from 'react'
import classNames from 'classnames/bind'

import style from './Button2.scss'

const cx = classNames.bind(style)

const Button2 = ({ disabled, children, onClick }) => {
  if (disabled) {
    return (
      <button className={cx('Button2')} disabled={true}>
        {children}
      </button>
    )
  } else {
    return (
      <div className={cx('Button2')} onClick={onClick}>
        {children}
      </div>
    )
  }
}

Button2.defaultProps = {
  disabled: false,
  onClick: null,
}

export default Button2
