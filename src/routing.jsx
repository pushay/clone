import React from 'react';
import {Route, Switch } from 'react-router-dom';
import LogSign from './Components/logSign';

function Routing(){
    return(
        <Switch>
            <Route exact path="/">
                <LogSign login/>
            </Route>
        </Switch>
    )
} 

export default Routing