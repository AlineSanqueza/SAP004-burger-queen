import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './screen/Login';
import Register from './screen/Register';


const Routes = () => {
  return (
    <Switch>
      <Route exact path='/login' component={Login}/>
      <Route path='/register'component={Register}/>  
    </Switch>
  );
}

export default Routes;