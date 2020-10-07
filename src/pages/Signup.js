import React from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'

import style from 'pages/Signup.scss'
import SignupForm from 'components/signup/SignupForm.js'
import Banner from 'elements/Banner.js'
import Button from 'elements/Button.js'
import FindLink from 'components/signin/FindLink.js'

const cx = classNames.bind(style)

const Signup = () => {
  let history = useHistory()
  const onClick = () => {
    history.push('/signin')
  }
  return (
    <div className={cx('Signup')}>
      <div className={cx('Signup-wrapper')}>
        <Banner title={'회원가입'} />
        <SignupForm />
        <FindLink />
        <Button title={'로그인'} onClick={onClick} />
      </div>
    </div>
  )
}

export default Signup
