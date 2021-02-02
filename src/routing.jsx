import React from 'react';
import {Route, Switch } from 'react-router-dom';
import LogSign from './Components/LoginSign/LogSign';
import TextBlocks from './Components/TextBlock/TextBlockText';

function Routing(){
    return(
        <Switch>
            <Route exact path="/">
                <LogSign imageSlider='login' textBlock={TextBlocks.textBlock3} inputs='loginInput' question='signup'/>
            </Route>
            <Route path="/signUp">
                <LogSign inputs='signInput' textBlock={TextBlocks.textBlock2} question='login'/>
            </Route>
        </Switch>
    )
} 

export default Routing