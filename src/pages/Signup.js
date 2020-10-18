import React from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'

import style from 'pages/Signup.scss'
import SignupForm from 'components/signup/SignupForm.js'
import Button2 from 'elements/Button2.js'
import FindLink from 'elements/FindLink.js'

const cx = classNames.bind(style)

const Signup = () => {
  let history = useHistory()
  const onClick = () => {
    history.push('/signin')
  }
  return (
    <div className={cx('Signup')}>
      <div className={cx('Signup-wrapper')}>
        <SignupForm />
        <FindLink />
        <Button2 onClick={onClick}>로그인</Button2>
      </div>
    </div>
  )
}

export default Signup
