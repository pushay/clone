import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Button from '../Components/Button';
import ImageSlider from './ImageSlider';
import {InputsText, LogSignTexts} from './LogSignText';

function LogSign(props){

    const [loginForm, setLoginForm] = useState({})
    const [signUpForm, setSignUpForm] = useState({})
    const [buttonDisabled, setButtonState] = useState(true)

    useEffect( () => {
            if (loginForm.username == '' || loginForm.password == ''){
                setButtonState(true)
            }
            else if (!loginForm.password == '' && !loginForm.username == ''){
                setButtonState(false);
            }

    },[loginForm])

    const getForm = (input, inputValue) => {
        if (input == 'all' || input == 'password'){
            setLoginForm({...loginForm, [input]:inputValue})
        }
        else setSignUpForm({...signUpForm, [input]:inputValue})
    }

    return(
        <div className='logSign' style={{padding:props.inputs == 'loginInput' ? '11.5rem 2rem' : '4.5rem 2rem'}}>
            {props.imageSlider == 'login' ? 
                <ImageSlider imageSlider='login'/>
            : null 
            }
            <div 
            className="logSign__Instagram">
                <div className='logSign__log'>
                    <h1 className="logSign__header">InstagramClone</h1>
                    {props.question == 'login' ?
                     <p className='logSign__headerParagraph'>{LogSignTexts.signup.headingText}</p>
                     : null
                    }
                    <div className="logSign__formContainer">
                        <form className="logSign__form">
                            {InputsText[props.inputs].map((inputType, i)=> {
                                return(
                                    <div key={inputType.name+{i}}>
                                        <input
                                        onChange={e => {getForm(inputType.type, e.target.value)}} 
                                        name={inputType.name}
                                        className='logSign__input'
                                        placeholder={inputType.name}/>
                                    </div>
                                )
                            })}
                            <Button text='Log in' disabled={buttonDisabled}/>
                            {props.question == 'login' ? 
                            <p className='logSign__bellowParagraph'>{LogSignTexts.signup.belowText}</p>
                            : null    
                            }
                        </form>
                    </div>
                </div>
                {props.question == 'signup' || "login" ?
                <div className='logSign__question'>
                    <p className='logSign__paragraph'>{LogSignTexts[props.question].question.question}</p>
                    <Link className='logSign__link' to={LogSignTexts[props.question].question.link}>{LogSignTexts[props.question].question.linkText}</Link>
                </div>
                : null
                }
            </div>
            
        </div>
    )
}

export default LogSign

