import React from 'react';
import LogSign from '../../../Components/LoginSign';
import TextBlocks from '../../../Components/TextBlock/TextBlockText';
import {InputsText} from '../../../Components/LoginSign/logSignText';

export default function Signup() {

    return (
        <div className='loginSignup'>
            <LogSign
            logo
            inputs={InputsText.signInput}
            buttonName='Sign up' 
            question={TextBlocks.textBlock2} 
            logSignDiv='logSign logSign--sign'
            inputClass='input__input input__input--form'  
            popUpClass='popUp popUp--signed'
            buttonClass='button button--form'
            endText={TextBlocks.textBlock7} />
        </div>
    )
}