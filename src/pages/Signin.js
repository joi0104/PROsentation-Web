import React from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'

import style from 'pages/Signin.scss'
import SigninForm from 'components/signin/SigninForm.js'
import Button2 from 'elements/Button2.js'
import FindLink from 'elements/FindLink.js'

const cx = classNames.bind(style)

const Signin = ({ setHasCookie }) => {
  let history = useHistory()

  const onClick = () => {
    history.push('/signup')
  }

  return (
    <div className={cx('Signin')}>
      <div className={cx('Signin-wrapper')}>
        <SigninForm setHasCookie={setHasCookie} />
        <FindLink />
        <Button2 onClick={onClick}>회원가입</Button2>
      </div>
    </div>
  )
}

export default Signin
