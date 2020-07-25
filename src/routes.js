import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from '../src/Screen/Login'
import Register from '../src/Screen/Register'
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Login} exact />
                <Route path='/Register' component={Register}/>
                </Switch>
        </BrowserRouter>
    )
}
export default Routes;