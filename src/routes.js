import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './screen/Login';
import Register from './screen/Register';
//import Private from './private';
import Kitchen from './screen/Kitchen';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/register'component={Register}/>  
      <Route path='/kitchen' component={Kitchen}/>
    </Switch>
  );

}
export default Routes;