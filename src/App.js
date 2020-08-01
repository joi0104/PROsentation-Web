import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom"
import classNames from 'classnames/bind'

import style from 'App.scss'
import Main from 'pages/Main'
import Login from 'pages/Login'

const cx = classNames.bind(style)

function App() {
  return (
    <div className={cx('App')}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
