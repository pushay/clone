import React from 'react';
import LogSign from '../../../Components/LoginSign';
import TextBlocks from '../../../Components/TextBlock/TextBlockText';
import ImageSlider from '../../../Components/ImageSlider';
import {InputsText} from '../../../Components/LoginSign/logSignText';

export default function Login() {

    return (
        <div className='loginSignup'>
            <ImageSlider/>
            <LogSign
            logo
            imageSlider='login' 
            buttonName='login in' 
            question={TextBlocks.textBlock3} 
            inputs={InputsText.loginInput}
            logSignDiv='logSign logSign--login'
            inputClass='input__input input__input--form'
            buttonClass='button button--form'  
            popUpClass='popUp popUp--logged'/>
        </div>
    )
}