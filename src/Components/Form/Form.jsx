import React, {useState, useEffect} from 'react';
import {InputsText} from '../LoginSign/LogSignText';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom'


function Form(props){

    const [loginForm, setLoginForm] = useState({})
    const [signUpForm, setSignUpForm] = useState({})
    const [buttonDisabled, setButtonState] = useState(true)

    const location = useLocation();

    useEffect( () => {
            if (location.pathname === '/'){
                if (loginForm.usephemail == '' || loginForm.password == ''){
                    setButtonState(true)
                }
                else if (!loginForm.usephemail == '' && !loginForm.password == '' ){
                    setButtonState(false);
                }
            } else {
                if (signUpForm.number == '' || signUpForm.email == '' || signUpForm.fullName == '' || signUpForm.username == '' || signUpForm.password == '' ){
                    setButtonState(true)
                }
                else if (!signUpForm.number == '' && !signUpForm.email == '' && !signUpForm.fullName == '' && !signUpForm.username == '' && !signUpForm.password == ''){
                    setButtonState(false);
                   
                }
            }
           

    },[loginForm, signUpForm, location.pathname])

    const getForm = (input, inputValue) => {
        if (location.pathname === '/'){
            setLoginForm({...loginForm, [input]:inputValue})
        }
        if (location.pathname === '/signUp') {
            setSignUpForm({...signUpForm, [input]:inputValue})
        }
        
    }
   

    return(
        <div className='form__formContainer'>
            <form className='form__formArea' id='form'>
                {InputsText[props.inputs].map((inputType, i)=> {
                    return(
                        <div key={inputType.name+{i}}>
                            <input
                                onChange={e => {getForm(inputType.type, e.target.value)}} 
                                name={inputType.name}
                                className='form__input'
                                placeholder={inputType.name}/>
                        </div>
                        )
                    })}
                <Button text='Log in' disabled={buttonDisabled}/>
            </form>
        </div>
    )
}

export default Form