import React from 'react'
import classNames from 'classnames/bind'

import style from './Description.scss'

const cx = classNames.bind(style)

const Description = ({ children }) => {
  return <p className={cx('Description')}>{children}</p>
}

export default Description
