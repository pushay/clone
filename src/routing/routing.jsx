import React from 'react';
import {Switch } from 'react-router-dom';
import Login from '../Pages/Auth/Login';
import Signup from '../Pages/Auth/Signup';
import VerificateAccount from '../Pages/Auth/VerificateAccount';
import Main from '../Pages/app/main';
import PrivateAuthenticatedRoute from './PrivateAuthenticatedRoute';
import PrivateUnAuthenticatedRoute from './PrivateUnauthenticatedRoute';

function Routing(){

    return(
        <Switch>
            <PrivateAuthenticatedRoute path="/main">
                <Main/>
            </PrivateAuthenticatedRoute>
            <PrivateUnAuthenticatedRoute exact path='/'>
                <Login/>
            </PrivateUnAuthenticatedRoute>
            <PrivateUnAuthenticatedRoute exact path="/signUp">
                <Signup/>
            </PrivateUnAuthenticatedRoute>
            <PrivateUnAuthenticatedRoute path="/signUp/verify" >
                <VerificateAccount/>
            </PrivateUnAuthenticatedRoute>
        </Switch>
    )
} 

export default Routing

