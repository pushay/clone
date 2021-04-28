import React from 'react';
import { useLocation } from 'react-router-dom';

const Input = (props) => {
    const location = useLocation()

    const getForm = (input, inputValue, e) => {
        if (location.pathname === '/' ){
            props.setLoginForm({...props.loginForm, [input]:inputValue})
        }
        if (location.pathname === '/signUp') {
            props.setSignUpForm({...props.signUpForm, [input]:inputValue})
        }
        if (location.pathname === '/signUp/verify'){
            props.setVerificationCodeInput({...props.verificationCode,'email':window.localStorage.getItem('email'), [input]:inputValue})
        }
    }

    const g4et = (event)=> {
        if (event.keyCode === 13) {
            props.setSearch(event.target.value)
            event.currentTarget.value = "";
        }
    }

    return(
        <div className='input'>
            {props.icon ?
            <img className='input__icon' src={props.icon} alt={props.icon+'icon'} /> 
            : null
            }
            <input
                style={props.style ? props.style : null}
                onKeyDown={props.onKeyDown ? event => g4et(event) : null}
                onChange={props.onChange ? e => {getForm(props.inputType.useAs, e.target.value, e)} : null}
                type={props.inputType.type ? props.inputType.type : null} 
                name={props.inputType.name}
                className={props.inputClass}
                placeholder={props.inputType.name} />
        </div>
    )
}

export default Input