import React, {useState, useEffect} from 'react';
import {InputsText} from '../LoginSign/LogSignText';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom'
import { computeHeadingLevel } from '@testing-library/react';

function Form(props){

    const [loginForm, setLoginForm] = useState({})
    const [signUpForm, setSignUpForm] = useState({})
    const [buttonDisabled, setButtonState] = useState(true)
    const [logRedInputs, setLogRedInputs] = useState([])
    const [signRedInputs, setSignRedInputs] = useState([])
    
    const location = useLocation();

    useEffect( () => {
            hidePopUp()
            validateForm();
    },[loginForm, signUpForm, location.pathname])

    useEffect(() => {
        setLogRedInputs([]);
        setSignRedInputs([]);
    }, [ location.pathname ])


    const redingInputs = () => {
        let passRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$', 'gm');

        if (location.pathname === '/'){
            let loginInputArr = []

            if (loginForm.usephemail < 3){
                loginInputArr.push(1)
            } else loginInputArr.push(0)
            
            if (!loginForm.password.match(passRegex)){
                loginInputArr.push(1)
            } else loginInputArr.push(0)
            setLogRedInputs(loginInputArr)
        }

        if(location.pathname === '/signUp'){
        let signInputArr = []

        if (props.modalMessages.includes('Number has to have 9 digits')){
            signInputArr.push(1)
        } else signInputArr.push(0)

        if (props.modalMessages.includes('Invalid email')){
            signInputArr.push(1)
        } else signInputArr.push(0)

        if (signUpForm.fullName < 3){
            signInputArr.push(1)
        } else signInputArr.push(0)

        if (signUpForm.username < 3){
            signInputArr.push(1)
        } else signInputArr.push(0)
        
        if (props.modalMessages.includes('Password should have at least one big letter, one number and 8 characters')){
            signInputArr.push(1)
        } else signInputArr.push(0)
        
        setSignRedInputs(signInputArr)
        
      }
    }

    const showPopup = () => {
        let passRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$', 'gm');
        let emailRegex = new RegExp('.+@.{2,15}\..{1,15}')

        if (location.pathname === '/'){
            let messageArray = props.modalMessages;

            if (loginForm.usephemail || loginForm.password){
                if ((loginForm.usephemail && loginForm.usephemail.length <= 3) || (loginForm.password && loginForm.password.length <= 3)){
                    if (!messageArray.includes('Please complete the form')){
                        messageArray.push('Please complete the form')
                    }
                }
            }
            props.setModalMessages(messageArray)
            setTimeout(()=> {
                props.setShowModal(true)
            },1000)
        }

        if (location.pathname === '/signUp'){
            let msgArray = props.modalMessages;

            if (signUpForm.number){
                if (signUpForm.number && signUpForm.number.length !=9 ){
                    if (!msgArray.includes('Number has to have 9 digits')){
                        msgArray.push('Number has to have 9 digits')
                    }
                }
            }
            if (signUpForm.email){
                if (signUpForm.email && !signUpForm.email.match(emailRegex)){
                    if (!msgArray.includes('Invalid email')){
                        msgArray.push('Invalid email')
                    }
                } 
            }
            if (signUpForm.fullName || signUpForm.username){
                if (signUpForm.fullName && signUpForm.fullName.length < 3){
                    if (!msgArray.includes('Fullname and username should have at least 3 letters')){
                        msgArray.push('Fullname and username should have at least 3 letters')
                    }
                } 
            }
            if (signUpForm.password){
                if (signUpForm.password && !signUpForm.password.match(passRegex)){
                    if (!msgArray.includes('Password should have at least one big letter, one number and 8 characters')){
                        msgArray.push('Password should have at least one big letter, one number and 8 characters')
                    }
                }
            }
            
            props.setModalMessages(msgArray)
            setTimeout(()=> {
                props.setShowModal(true);
            },1000)
            } 
    }

    const hidePopUp = () => {
        let passRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$', 'gm');
        let emailRegex = new RegExp('.+@.{2,15}\..{1,15}')

        if (location.pathname === '/'){

            let messageArray = props.modalMessages;

            if ((loginForm.usephemail && loginForm.usephemail.length >= 3) && (loginForm.password && loginForm.usephemail.password >= 3 && loginForm.password.match(passRegex))){
                let newArray = messageArray.filter(element => element !== 'Please complete the form')
                messageArray = newArray;
                props.setModalMessages(messageArray)
            }
        }

        if (location.pathname === '/signUp'){
            let msgArray = props.modalMessages;

            if (signUpForm.number && signUpForm.number.length == 9 ){
                let newArray  = msgArray.filter(elem => elem !== 'Number has to have 9 digits')
                    msgArray = newArray;
            }
            if (signUpForm.email && signUpForm.email.match(emailRegex)){
                let newArray  = msgArray.filter(elem => elem !== 'Invalid email')
                msgArray = newArray;
                    
            }
            if ((signUpForm.fullName && signUpForm.fullName.length >= 3) && (signUpForm.username && signUpForm.username.length >= 3) ){
                let newArray  = msgArray.filter(elem => elem !== 'Fullname and username should have at least 3 letters')
                msgArray = newArray; 
            }
            if (signUpForm.password && signUpForm.password.match(passRegex)){
                let newArray  = msgArray.filter(elem => elem !== 'Password should have at least one big letter, one number and 8 characters')
                msgArray = newArray; 
            }
            props.setModalMessages(msgArray)
        }
    }


    const validateForm = () => {

        if (location.pathname === '/'){
            if (loginForm.password && loginForm.password.length >= 3 && loginForm.usephemail && loginForm.usephemail.length >= 3){
                setButtonState(false);
            } else
                setButtonState(true)
    
        } else {
            if (signUpForm.number && signUpForm.email && signUpForm.fullName && signUpForm.username && signUpForm.password &&
                signUpForm.number.length >= 3 && signUpForm.fullName.length >= 3 && signUpForm.username.length >= 3 && signUpForm.email.length >= 3 && signUpForm.password.length >= 3){
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
                        <div className='form__inputArea' key={inputType+[i]}>
                            <input
                                style={{
                                    border: (signRedInputs[i] === 1 || logRedInputs[i] === 1) ? '1px solid red' : '1px solid rgb(180, 173, 173)'
                                }}
                                onChange={e => {getForm(inputType.useAs, e.target.value);}}
                                type={inputType.type ? inputType.type : null} 
                                name={inputType.name}
                                className='form__input'
                                placeholder={inputType.name}
                                 />
                        </div>
                        )
                    })}
                <Button text={location.pathname === '/' ? 'Log in' : 'Sign up'} onClick={() =>{showPopup();redingInputs()}} disabled={buttonDisabled}/>
            </form>
        </div>
    )
}

export default Form