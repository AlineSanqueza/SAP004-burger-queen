import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './screen/Login';
import Register from './screen/Register';
//import Private from './private';
import Kitchen from './screen/Kitchen';
import Saloon from './screen/Saloon';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/register'component={Register}/>  
      <Route path='/kitchen' component={Kitchen}/>
      <Route path='/saloon' component={Saloon}/>
    </Switch>
  );

}
export default Routes;