import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from 'pages/Signup.scss'
import SignupForm from 'components/signup/SignupForm.js'
import Button2 from 'elements/Button2.js'
import Line from 'elements/Line.js'

const cx = classNames.bind(style)

const Signup = () => {
  return (
    <div className={cx('Signup')}>
      <div className={cx('Signup-wrapper')}>
        <div className={cx('Signup-content')}>
          <SignupForm />
          <Line />
          <Link className={cx('go-to')} to="/signin">
            <Button2>로그인 하기</Button2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
