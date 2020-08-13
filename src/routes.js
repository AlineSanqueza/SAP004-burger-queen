import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './screen/Login';
import Register from './screen/Register';
//import Private from './private';
import Kitchen from './screen/Kitchen';
import Saloon from './screen/Saloon';
import Delivery from './screen/Delivery'
//import Notfound from './screen/NotFound'
//import PrivateRoute from './private'
import './index.css'
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/register' component={Register}/>  
      <Route exact path='/kitchen' component={Kitchen}/>
      <Route exact path='/saloon' component={Saloon}/>
      <Delivery exact path ='/delivery' component={Delivery}/>
      {/*<Route component={Notfound}/>*/}
    </Switch>
  );
}

export default Routes;
