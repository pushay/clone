import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import VerificateAccount from './Pages/Auth';

function Routing(){
    return(
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/signUp">
                <Signup />
            </Route>
            <Route path="/signUp/verify">
                <VerificateAccount/>
            </Route>
        </Switch>
    )
} 

export default Routing