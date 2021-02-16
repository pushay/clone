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
        validateForm()
       
    },[loginForm, signUpForm, location.pathname])


    const validateForm = () => {
        let passRegex = new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$', 'gm');
        let emailRegex = new RegExp('.+@.{2,15}\..{1,15}')

        if (location.pathname === '/'){
            if (loginForm.password && loginForm.password.match(passRegex) && loginForm.usephemail && loginForm.usephemail.length >= 3){
                setButtonState(false);
            } else
                setButtonState(true)
        } else {  
            if (signUpForm.number && signUpForm.email && signUpForm.fullName && signUpForm.username && signUpForm.password && signUpForm.password.match(passRegex) && signUpForm.email.match(emailRegex) && signUpForm.number.length == 9 && ( signUpForm.fullName.length >= 3 && signUpForm.username.length >= 3)){
                setButtonState(false)
            }
            else {
                setButtonState(true);
            }
        }
    }

    const getForm = (input, inputValue) => {
        if (location.pathname === '/' ){
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
                                onChange={e => {getForm(inputType.useAs, e.target.value);}}
                                type={inputType.type ? inputType.type : null} 
                                name={inputType.name}
                                className='form__input'
                                placeholder={inputType.name} />
                        </div>
                        )
                    })}
                <Button text={location.pathname === '/' ? 'Log in' : 'Sign up'}  disabled={buttonDisabled}/>
            </form>
        </div>
    )
}

export default Form