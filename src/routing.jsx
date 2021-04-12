import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import VerificateAccount from './Pages/Auth/VerificateAccount';
import Main from './Pages/app/main';


function Routing(){
    return(
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/signUp">
                <Signup/>
            </Route> */
            <Route path="/signUp/verify">
                <VerificateAccount/>
            </Route>
            <Route path="/main">
                <Main/>
            </Route>
        </Switch>
    )
} 

export default Routing