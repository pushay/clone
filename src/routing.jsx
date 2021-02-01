import React from 'react';
import {Route, Switch } from 'react-router-dom';
import LogSign from './Components/LogSign';

function Routing(){
    return(
        <Switch>
            <Route exact path="/">
                <LogSign imageSlider='login' inputs='loginInput' question='signup'/>
            </Route>
            <Route path="/signUp">
                <LogSign inputs='signInput' question='login'/>
            </Route>
        </Switch>
    )
} 

export default Routing