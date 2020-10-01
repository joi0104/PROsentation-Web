import React from 'react'
import classNames from 'classnames/bind'
import { useHistory, Link } from 'react-router-dom'

import style from 'pages/Signin.scss'
import SigninForm from 'components/signin/SigninForm.js'
import Banner from 'elements/Banner.js'
import Button2 from 'elements/Button2.js'
import FindLink from 'components/signin/FindLink.js'

const cx = classNames.bind(style)

const Signin = ({ setHasCookie }) => {
  let history = useHistory()

  const onClick = () => {
    history.push('/signup')
  }

  return (
    <div className={cx('Signin')}>
      <div className={cx('Signin-wrapper')}>
        <Banner title={'로그인'} />
        <SigninForm setHasCookie={setHasCookie} />
        <FindLink />
        <Button2 title={'회원가입'} onClick={onClick} />
      </div>
    </div>
  )
}

export default Signin
