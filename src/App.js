import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import classNames from 'classnames/bind'

import style from 'App.scss'
import Main from 'pages/main/Main.js'
import Signin from 'pages/signin/Signin.js'
import Signup from 'pages/signup/Signup.js'
import Navbar from 'components/navbar/Navbar.js'
import User from 'pages/user/User.js'
import Service from 'pages/service/Service.js'

const cx = classNames.bind(style)

const App = () => {
  const [ hasCookie, setHasCookie ] = useState(true)

  return (
    <div className={cx('App')}>
        <Navbar hasCookie={hasCookie}/>
          <Route path="/" exact component={()=> <Main hasCookie={hasCookie} />} />
          <Route path="/signin" component={() => !hasCookie? <Signin setHasCookie={setHasCookie} /> : <Redirect to="/" />}/>
          <Route path="/signup" component={() => !hasCookie? <Signup /> : <Redirect to="/" />} />
          <Route path="/service" component={() => hasCookie? <Service/> : <Redirect to="/" />} />
          <Route path="/user" component={() => hasCookie? <User/> : <Redirect to="/" />} />
    </div>
  );
}

export default App;