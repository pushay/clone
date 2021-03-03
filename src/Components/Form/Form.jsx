import React, {useState, useEffect} from 'react';
import {InputsText} from '../LoginSign/LogSignText';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom'

function Form(props){

    const [loginForm, setLoginForm] = useState({})
    const [signUpForm, setSignUpForm] = useState({})
    const [buttonDisabled, setButtonState] = useState(true)
    const [logRedInputs, setLogRedInputs] = useState([])
    const [signRedInputs, setSignRedInputs] = useState([])
    const [readyForm, setReadyForm] = useState(false)
    
    const location = useLocation();

    useEffect( () => {
        hidePopUp()
        validateForm();
    },[loginForm, signUpForm, location.pathname])

    useEffect ( () => {
        const login = 'http://localhost/backend/auth/login.php';
        const sign = 'http://localhost/backend/auth/signup.php'

        if (location.pathname === '/'){
            postSignUpForm(loginForm, 'login', login)
        }
        if (location.pathname === '/signUp'){
            postSignUpForm(signUpForm, 'signUp', sign)
        }
    },[readyForm])

    const cleanMessages = () => {
        props.setModalMessages([])
        props.setShowModal(false)
    }

    const clearForm = () => {
        document.querySelectorAll('input').forEach(el => el.value = '')
        setSignUpForm({})
        setLoginForm({})
    }

    const cleaningRedInputs = () => {
        setLogRedInputs([])
        setSignRedInputs([])
    }
    useEffect( ()=>{
       return () => {
        cleaningRedInputs()
        cleanMessages()
       
    }},[location.pathname])


    const redingInputs = () => {

        if (location.pathname === '/signUp'){
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
        
        setTimeout(()=> {
            setSignRedInputs(signInputArr)
        },1000)

        setTimeout(()=> {
            setSignRedInputs([])
        },10000)

    }
}

    const showPopup = () => {
        let passRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$', 'gm');
        let emailRegex = new RegExp('.+@.{2,15}\..{1,15}')

        if (location.pathname === '/'){
            let messageArray = props.modalMessages;

            if (loginForm.usephemail){
                if (loginForm.usephemail.length < 3){
                    if (!messageArray.includes('Please correct login')){
                        messageArray.push('Please correct login')
                    }
                }
            }

            if (loginForm.password){
                if (loginForm.password.length <3){
                    if (!messageArray.includes('Password should have at least one big letter, one number and 3 characters')){
                        messageArray.push('Password should have at least one big letter, one number and 3 characters')
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
                if (signUpForm.number.length !=9 ){
                    if (!msgArray.includes('Number has to have 9 digits')){
                        msgArray.push('Number has to have 9 digits')
                    }
                }
            }
            if (signUpForm.email){
                if (!signUpForm.email.match(emailRegex)){
                    if (!msgArray.includes('Invalid email')){
                        msgArray.push('Invalid email')
                    }
                } 
            }
            if (signUpForm.fullName || signUpForm.username){
                if (signUpForm.username.length < 3 || signUpForm.fullName.length < 3){
                    if (!msgArray.includes('Fullname and username should have at least 3 letters')){
                        msgArray.push('Fullname and username should have at least 3 letters')
                    }
                } 
            }
            if (signUpForm.password){
                if (!signUpForm.password.match(passRegex)){
                    if (!msgArray.includes('Password should have at least one big letter, one number and 3 characters')){
                        msgArray.push('Password should have at least one big letter, one number and 3 characters')
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

            if (loginForm.usephemail){
                if ((loginForm.usephemail.length >= 3)){
                    let newArray = messageArray.filter(element => element !== 'Please correct login')
                    messageArray = newArray;
                }
            }

            if (loginForm.password){
                if (loginForm.password.length >= 3){
                    let newArray = messageArray.filter(element => element !== 'Password should have at least one big letter, one number and 3 characters')
                    messageArray = newArray;
                }
            }
            props.setModalMessages(messageArray)
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
                let newArray  = msgArray.filter(elem => elem !== 'Password should have at least one big letter, one number and 3 characters')
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

    const checkForm = () => {
        if (props.modalMessages.length == 0){
            setReadyForm(true)
        }
    }

    const postSignUpForm = (form, formType, http) => {
       if (readyForm === true){

        let formData = new FormData()
        for (let [key, value] of Object.entries(form)){
            formData.append(key, value)
        }
        formData.append('type', formType);
        fetch(http, {
            method: 'POST', // or 'PUT'
            mode:'cors',
            body: formData
            })
            .then(response => response.text()).then( () => {clearForm()})
       }
    }

    const buttonFunctionWrapper = () => {
        showPopup()
        redingInputs()
        checkForm()
    }

    return(
        <div className='form__formContainer'>
            <form className='form__formArea' id='form'>
                {InputsText[props.inputs].map((inputType, i)=> {
                    return(
                        <div className='form__inputArea' key={[props.inputs]+inputType.name+[i]}>
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
                <Button text={location.pathname === '/' ? 'Log in' : 'Sign up'} onClick={() =>{buttonFunctionWrapper()}} disabled={buttonDisabled}/>
            </form>
        </div>
    )
}

export default Form