import React from 'react'
import classNames from 'classnames/bind'
import { Route, Switch } from 'react-router-dom'

import style from 'pages/user/User.scss'
import MyVideo from 'pages/user/MyVideo.js'
import MyInfo from 'pages/user/MyInfo.js'
import Premium from 'pages/user/Premium.js'

const cx = classNames.bind(style)

const User = () => {
  return (
    <div className={cx('User')}>
      <Switch>
        <Route exact path="/user/myinfo" component={MyInfo} />
        <Route exact path="/user/myvideo" component={MyVideo} />
        <Route exact path="/user/premium" component={Premium} />
      </Switch>
    </div>
  )
}

export default User
