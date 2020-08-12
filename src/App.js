import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { withCookies, useCookies } from 'react-cookie';
import classNames from 'classnames/bind'

import style from 'App.scss'
import Main from 'pages/Main'
import Signin from 'pages/Signin'
import Navbar from 'pages/Navbar'
import Preparation from 'pages/Preparation'
import Recoding from 'pages/Recoding'
import Result from 'pages/Result'
import MyVideo from 'pages/MyVideo'
import Premium from 'pages/Premium'


const cx = classNames.bind(style)

const App = () => {
  const [ hasCookie, setHasCookie ] = useState(false)

  return (
    <div className={cx('App')}>
      <Router>
        <Navbar hasCookie={hasCookie}/>
          <Route path="/" exact component={()=> <Main hasCookie={hasCookie}/>} />
          <Route path="/login" component={() => <Login setHasCookie={setHasCookie} />}/>
          <Route path="/preparation" component={Preparation} />
          <Route path="/recoding" component={Recoding} />
          <Route path="/result" component={Result} />
          <Route path="/myvideo" component={MyVideo} />
          <Route path="/premium" component={Premium} />
      </Router>
    </div>
  );
}

export default App;