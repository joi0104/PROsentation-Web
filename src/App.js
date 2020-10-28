import React, { useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import classNames from 'classnames/bind'

import style from 'App.scss'
import Navbar from 'components/navbar/Navbar.js'
import Main from 'pages/Main.js'
import Signin from 'pages/Signin.js'
import Signup from 'pages/Signup.js'
import Service from 'pages/Service.js'
import User from 'pages/user/User.js'
import FindEmail from 'pages/FindEmail.js'
import FindPassword from 'pages/FindPassword.js'
import Error from 'pages/Error.js'
import { UserProvider } from 'contexts/user.js'
import { AmountProvider } from 'contexts/amount.js'

const cx = classNames.bind(style)

const App = () => {
  const [hasCookie, setHasCookie] = useState(false)

  return (
    <div className={cx('App')}>
      <UserProvider>
        <AmountProvider>
          <Navbar hasCookie={hasCookie} setHasCookie={setHasCookie} />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Main hasCookie={hasCookie} />}
            />
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
              path="/find-email"
              component={() =>
                !hasCookie ? <FindEmail /> : <Redirect to="/" />
              }
            />
            <Route
              exact
              path="/find-password"
              component={() =>
                !hasCookie ? <FindPassword /> : <Redirect to="/" />
              }
            />
            <Route
              exact
              path="/service"
              component={() =>
                hasCookie ? <Service /> : <Redirect to="/signin" />
              }
            />
            <Route
              path="/user"
              component={() =>
                hasCookie ? <User /> : <Redirect to="/signin" />
              }
            />
            <Route component={Error} />
          </Switch>
        </AmountProvider>
      </UserProvider>
    </div>
  )
}

export default App
