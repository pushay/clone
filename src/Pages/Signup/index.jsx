import React from 'react';
import LogSign from '../../Components/LoginSign/LogSign';
import TextBlocks from '../../Components/TextBlock/TextBlockText';

export default function Signup() {
    return (
        <div className='loginSignup'>
             <LogSign
             logo
             FbButton
             inputs='signInput' 
             buttonName='Sign up' 
             question={TextBlocks.textBlock2} 
             logSignDiv='logSign logSign--sign'
             inputClass='form__input form__input--form'  
             popUpClass='popUp popUp--signed'
             buttonClass='button button--form'
            endText={TextBlocks.textBlock7} />
        </div>
    )
}