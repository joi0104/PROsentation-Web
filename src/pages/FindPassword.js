import React, { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import style from './FindPassword.scss'
import Input from 'elements/Input.js'
import Button from 'elements/Button.js'
import Button2 from 'elements/Button2.js'
import Line from 'elements/Line.js'

const cx = classNames.bind(style)

const FindPassword = () => {
  const [email, setEmail] = useState('')

  const onClick = () => {}

  const onChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className={cx('FindPassword')}>
      <div className={cx('FindPassword-wrapper')}>
        <div className={cx('FindPassword-content')}>
          <Input
            label="이메일"
            name="email"
            type="email"
            value={email}
            changeForm={onChange}
          />
          <p className={cx('description')}>
            이메일로 비밀번호 변경 링크를 보내드려요.
          </p>
          <Button onClick={onClick}>변경 링크 전송하기</Button>
          <div className={cx('Find-links')}>
            <Link className={cx('Find-link')} to="/find-email">
              아이디 찾기
            </Link>
            <Link className={cx('Find-link')}>|</Link>
            <Link className={cx('Find-link')} to="/signin">
              로그인 하기
            </Link>
          </div>
          <Line />
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button2>간편가입하기</Button2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FindPassword
