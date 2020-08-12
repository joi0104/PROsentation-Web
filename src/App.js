import React, { useState, useEffect } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import { withCookies, useCookies } from 'react-cookie';
import classNames from 'classnames/bind'

import style from 'App.scss'
import Main from 'pages/Main'
import Signin from 'pages/Signin'
import Navbar from 'pages/Navbar'

const cx = classNames.bind(style)

const App = () => {
  const [ hasCookie, setHasCookie ] = useState(false)

  return (
    <div className={cx('App')}>
      <Navbar hasCookie={hasCookie}/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/signin" exact component={() => <Signin setHasCookie={setHasCookie} />}/>
        </Switch>
    </div>
  );
}

export default App;