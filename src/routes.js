import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login/login.js';
import Register from './pages/Register/register.js'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {Login}/>
        <Route path = 'register' component = {Register}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default Routes;