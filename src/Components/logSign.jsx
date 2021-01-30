import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Button from '../Components/Button';
import ImageSlider from './ImageSlider';

function LogSign(props){

    const LoginsText = {
        loginInput : ['username','password'],
        signInput : []
    }

    const [usernamePassword, setUserNamePassword] = useState({})
    const [buttonDisabled, setButtonState] = useState(true)

    useEffect( () => {
            if (usernamePassword.username == '' || usernamePassword.password == ''){
                setButtonState(true)
            }
            else if (!usernamePassword.password == '' && !usernamePassword.username == ''){
                setButtonState(false);
            }

    },[usernamePassword])

    const getForm = (input, inputValue) => {
        setUserNamePassword({...usernamePassword, [input]:inputValue})
    }

    return(
        <div className='logSign'>
            {props.imageSlider == 'login' ? 
                <ImageSlider imageSlider='login'/>
            : null 
            }
            <div 
            className="logSign__Instagram">
                <div className='logSign__log'>
                    <h1 className="logSign__header">InstagramClone</h1>
                    <div className="logSign__formContainer">
                        <form className="logSign__form">
                            {LoginsText.loginInput.map((inputType, i)=> {
                                return(
                                    <div key={inputType+{i}}>
                                        <input
                                        onChange={e => {getForm(inputType, e.target.value)}} 
                                        name={inputType}
                                        className='logSign__input'
                                        placeholder={inputType}/>
                                    </div>
                                )
                            })}
                            <Button text='Log in' disabled={buttonDisabled}/>
                        </form>
                    </div>
                </div>
                {props.question == 'signup' ?
                <div className='logSign__question'>
                    <p className='logSign__paragraph'>Don't have an account?</p>
                    <Link className='logSign__link' to='/'> Sign up</Link>
                </div>
                : null
                }
            </div>
            
        </div>
    )
}

export default LogSign

