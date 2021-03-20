import React from 'react';
import {Route, Switch } from 'react-router-dom';
import LogSign from './Components/LoginSign/LogSign';
import TextBlocks from './Components/TextBlock/TextBlockText';
import Message from './Components/Message/Message';

function Routing(){
    return(
        <Switch>
            <Route exact path="/">
                <LogSign imageSlider='login' buttonName='login in' textBlock={TextBlocks.textBlock3} inputs='loginInput' question='signup'/>
            </Route>
            <Route exact path="/signUp">
                <LogSign inputs='signInput' buttonName='Sign up' textBlock={TextBlocks.textBlock2} question='login'/>
            </Route>
            <Route path="/signUp/message">
                <Message modaldivClass='message message--confirmEmail' textBlock1={TextBlocks.textBlock4} textBlock2={TextBlocks.textBlock5} button buttonName='Continue' buttonName1='Send code again' quantity='2' inputClass='form__input form__input--confirm' textBlock={TextBlocks.textBlock4} form />
            </Route>
        </Switch>
    )
} 

export default Routing