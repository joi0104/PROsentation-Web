import React from 'react'
import classNames from 'classnames/bind'

import style from './FindLink.scss'

const cx = classNames.bind(style)

const FindLink = () => {
  return (
    <div className={cx('FindLink')}>
      <p to="/">아이디 찾기</p>
      <p>|</p>
      <p to="/">비밀번호 찾기</p>
    </div>
  )
}

export default FindLink
