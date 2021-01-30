import React from 'react';
import {Route, Switch } from 'react-router-dom';
import LogSign from './Components/LogSign';

function Routing(){
    return(
        <Switch>
            <Route exact path="/">
                <LogSign imageSlider='login' question='signup'/>
            </Route>
        </Switch>
    )
} 

export default Routing