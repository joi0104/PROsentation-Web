import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom"

import Main from './pages/Main'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
