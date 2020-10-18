import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from 'pages/Signin.scss'
import SigninForm from 'components/signin/SigninForm.js'
import Button2 from 'elements/Button2.js'
import Line from 'elements/Line.js'

const cx = classNames.bind(style)

const Signin = ({ setHasCookie }) => {
  return (
    <div className={cx('Signin')}>
      <div className={cx('Signin-wrapper')}>
        <div className={cx('Signin-content')}>
          <SigninForm setHasCookie={setHasCookie} />
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
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button2>간편가입하기</Button2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signin
