import React from 'react'
import classNames from 'classnames/bind'
import { Route } from 'react-router-dom'

import style from 'pages/user/User.scss'
import MyInfo from 'pages/user/MyInfo.js'
import Premium from 'pages/user/Premium.js'

const cx = classNames.bind(style)

const User = () => {
  return (
    <div className={cx('User')}>
      <Route exact path="/user/myinfo" component={MyInfo} />
      <Route exact path="/user/premium" component={Premium} />
    </div>
  )
}

export default User
