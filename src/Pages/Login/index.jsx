import React from 'react';
import LogSign from '../../Components/LoginSign/LogSign';
import TextBlocks from '../../Components/TextBlock/TextBlockText';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';

export default function Login() {
    return (
        <div className='loginSignup'>
            <ImageSlider/>
            <LogSign
            logo
            FbButton
            imageSlider='login' 
            buttonName='login in' 
            question={TextBlocks.textBlock3} 
            inputs='loginInput' 
            logSignDiv='logSign logSign--login'
            inputClass='form__input form__input--form'
            buttonClass='button button--form'  
            popUpClass='popUp popUp--logged'/>
        </div>
    )
}