import React from 'react';
import LogSign from '../../Components/LoginSign/LogSign';
import TextBlocks from '../../Components/TextBlock/TextBlockText';

export default function VerificateAccount(){
    return(
        <div className='loginSignup logSignup--verificate'>
            <LogSign
            frontText={TextBlocks.textBlock4}
            buttonName='Continue' 
            inputs='confirmInput'
            inputClass='form__input form__input--confirm'   
            logSignDiv='logSign logSign--login'  
            popUpClass='popUp popUp--logged'
            buttonClass='button button--confirm'
            buttonText='Send code again'
            endText={TextBlocks.textBlock6}
            />
        </div>
    )
}