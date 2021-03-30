import React from 'react';
import LogSign from '../../Components/LoginSign/LogSign';
import TextBlocks from '../../Components/TextBlock/TextBlockText';

export default function VerificateAccount(){

    const sendEmailAgain = () => {
        let formData = new FormData();
        formData.append('type','sendEmail');
        formData.append('email', window.localStorage.getItem('email'));
        fetch('http://localhost/backend/auth/signup.php',{
            method:'POST',
            mode:'cors',
            body:formData
        }).then(response => response.json())

    }

    return(
        <div className='loginSignup logSignup--verificate'>
            <LogSign
            frontText={TextBlocks.textBlock4}
            buttonName='Continue' 
            inputs='confirmInput'
            inputClass='form__input form__input--confirm'   
            logSignDiv='logSign logSign--login'
            popUpClass='popUp popUp--verify'
            buttonClass='button button--confirm'
            buttonText='Send code again'
            onClick={() => {sendEmailAgain()}}
            endText={TextBlocks.textBlock6}
            />
        </div>
    )
}