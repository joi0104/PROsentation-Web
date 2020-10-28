import React, { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import style from './FindEmail.scss'
import Input from 'elements/Input.js'
import Button from 'elements/Button.js'
import Button2 from 'elements/Button2.js'
import Line from 'elements/Line.js'

const cx = classNames.bind(style)

const FindEmail = () => {
  const [phone, setPhone] = useState('')

  const onClick = () => {}

  const onChange = (e) => {
    setPhone(e.target.value)
  }

  return (
    <div className={cx('FindEmail')}>
      <div className={cx('FindEmail-wrapper')}>
        <div className={cx('FindEmail-content')}>
          <Input
            label="휴대폰"
            name="phone"
            type="tel"
            value={phone}
            changeForm={onChange}
          />
          <Button onClick={onClick}>아이디 찾기</Button>
          <div className={cx('Find-links')}>
            <Link className={cx('Find-link')} to="/find-password">
              비밀번호 찾기
            </Link>
            <Link className={cx('Find-link')}>|</Link>
            <Link className={cx('Find-link')} to="/signin">
              로그인 하기
            </Link>
          </div>
          <Line />
          <Link className={cx('go-to')} to="/signup">
            <Button2>간편가입하기</Button2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FindEmail
