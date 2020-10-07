import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import classNames from 'classnames/bind'

import style from 'App.scss'
import Navbar from 'components/navbar/Navbar.js'
import Main from 'pages/Main.js'
import Signin from 'pages/Signin.js'
import Signup from 'pages/Signup.js'
import Service from 'pages/Service.js'
import User from 'pages/user/User.js'

const cx = classNames.bind(style)

const App = () => {
  const [hasCookie, setHasCookie] = useState(false)

  return (
    <div className={cx('App')}>
      <Navbar hasCookie={hasCookie} setHasCookie={setHasCookie} />
      <Route exact path="/" component={() => <Main hasCookie={hasCookie} />} />
      <Route
        exact
        path="/signin"
        component={() =>
          !hasCookie ? (
            <Signin setHasCookie={setHasCookie} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
      <Route
        exact
        path="/signup"
        component={() => (!hasCookie ? <Signup /> : <Redirect to="/" />)}
      />
      <Route
        exact
        path="/service"
        component={() => (hasCookie ? <Service /> : <Redirect to="/" />)}
      />
      <Route
        path="/user"
        component={() => (hasCookie ? <User /> : <Redirect to="/" />)}
      />
    </div>
  )
}

export default App
