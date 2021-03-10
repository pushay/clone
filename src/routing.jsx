import React from 'react';
import {Route, Switch } from 'react-router-dom';
import LogSign from './Components/LoginSign/LogSign';
import TextBlocks from './Components/TextBlock/TextBlockText';
import Modal from './Components/Modal/Modal';

function Routing(){
    return(
        <Switch>
            <Route exact path="/">
                <LogSign imageSlider='login' buttonName='Sign up' textBlock={TextBlocks.textBlock3} inputs='loginInput' question='signup'/>
            </Route>
            <Route path="/signUp">
                <LogSign inputs='signInput' buttonName='Log in' textBlock={TextBlocks.textBlock2} question='login'/>
            </Route>
            <Route path="/confirm">
                <Modal modaldivClass='modal modal--confirmEmail' button buttonName='Continue' inputClass='form__input form__input--confirm' textBlock={TextBlocks.textBlock4} form />
            </Route>
        </Switch>
    )
} 

export default Routing