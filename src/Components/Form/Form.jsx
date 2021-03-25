import React, {useState, useEffect} from 'react';
import {InputsText} from '../LoginSign/logSignText';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Form(props){

    const [loginForm, setLoginForm] = useState({})
    const [signUpForm, setSignUpForm] = useState({})
    const [buttonDisabled, setButtonState] = useState(true)
    const [logRedInputs, setLogRedInputs] = useState([])
    const [signRedInputs, setSignRedInputs] = useState([])
    const [verificationCode, setVerificationCodeInput] = useState({})
    
    const location = useLocation();
    const history = useHistory();

    useEffect( () => {
        if (location.pathname === '/' || location.pathname === '/signUp'){
            hidePopUp()
            validateForm();
        } 
    },[loginForm, signUpForm, location.pathname])

    const cleanMessages = () => {
        props.setPopUpMessages([])
        props.setShowPopUp(false)
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
        if (location.pathname === '/' || location.pathname === '/signUp'){
            return () => {
                cleaningRedInputs()
                cleanMessages()
        } 
    }},[location.pathname])


    const redingInputs = () => {

        if (location.pathname === '/signUp'){
        let signInputArr = []

        if (props.popUpMessages.includes('Number has to have 9 digits')){
            signInputArr.push(1)
        } else signInputArr.push(0)

        if (props.popUpMessages.includes('Invalid email')){
            signInputArr.push(1)
        } else signInputArr.push(0)

        if (signUpForm.fullName < 3){
            signInputArr.push(1)
        } else signInputArr.push(0)

        if (signUpForm.username < 3){
            signInputArr.push(1)
        } else signInputArr.push(0)
        
        if (props.popUpMessages.includes('Password should have at least one big letter, one number and 8 characters')){
            signInputArr.push(1)
        } else signInputArr.push(0)
        
        setTimeout(()=> {
            setSignRedInputs(signInputArr)
        },1000)

        setTimeout(()=> {
            setSignRedInputs([])
        },6000)

    }
}

    const showPopup = () => {
        let passRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$', 'gm');
        let emailRegex = new RegExp('.+@.{2,15}\..{1,15}')

        if (location.pathname === '/'){
            let messageArray = props.popUpMessages;

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


            props.setPopUpMessages(messageArray)
            setTimeout(()=> {
                props.setShowPopUp(true)
            },1000)
        }

        if (location.pathname === '/signUp'){
            let msgArray = props.popUpMessages;

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
            
            props.setPopUpMessages(msgArray)
            setTimeout(()=> {
                props.setShowPopUp(true);
            },1000)
            } 
    }

    const hidePopUp = () => {
        let passRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$', 'gm');
        let emailRegex = new RegExp('.+@.{2,15}\..{1,15}')

        if (location.pathname === '/'){

            let messageArray = props.popUpMessages;

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
            props.setPopUpMessages(messageArray)
            }

        if (location.pathname === '/signUp'){
            let msgArray = props.popUpMessages;

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
            props.setPopUpMessages(msgArray)
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
        if (location.pathname === '/signUp/message'){
            setVerificationCodeInput({...verificationCode, [input]:inputValue})
        }
    }

    const checkForm = () => {
        const login = 'http://localhost/backend/auth/login.php'
        const sign = 'http://localhost/backend/auth/signup.php'

        if (props.popUpMessages && props.popUpMessages.length == 0){

            if (location.pathname === '/'){
            postSignUpForm(loginForm, 'login', login)
            }

            if (location.pathname === '/signUp'){
            postSignUpForm(signUpForm, 'signUp', sign)
            }
        }
        if (location.pathname === '/signUp/message'){
            setVerificationCodeInput({...verificationCode, 'email':window.localStorage.getItem('email')})
            postSignUpForm(verificationCode, 'verificateCode', sign)
        }
    }

    const changeFormIfDataExists = (response) => {
        let messageArray = props.popUpMessages;

        if (response.usernameExists){
            messageArray.push("This username's already taken. Please change username")
        }
        if (response.emailExists){
            messageArray.push("This email's already connected to the account. Please login instead or use another one.")
        }
        props.setPopUpMessages(messageArray)

        setTimeout(()=> {
            props.setShowPopUp(true);
        },1000)

        setTimeout(()=> {
            cleanMessages()
        },7000)

    }

    const postSignUpForm = (form, formType, http) => {
        let formData = new FormData()
        for (let [key, value] of Object.entries(form)){
            formData.append(key, value)
        }
        formData.append('type', formType);
        fetch(http, {
            method: 'POST',
            mode:'cors',
            body: formData
            })
            .then(response => response.json()).then((response) => {
                if (location.pathname === '/signUp'){
                    if (response.registered){
                        window.localStorage.setItem('email',form.email)
                        clearForm();
                        history.push('/signUp/verify')
                    } else changeFormIfDataExists(response)
                }
            })
    }

    const buttonFunctionWrapper = () => {
        if (location.pathname === '/' || location.pathname === '/signUp'){
            showPopup()
            redingInputs()
            checkForm()
        } else checkForm()
    }

    return(
        <div className='form__formContainer'>
            <form className='form__formArea'
             id='form'>
                {InputsText[props.inputs].map((inputType, i)=> {
                    return(
                        <div className='form__inputArea' key={[props.inputs]+inputType.name+[i]}>
                            <input
                                style={{
                                    border: (signRedInputs[i] === 1 || logRedInputs[i] === 1) ?
                                     '1px solid red' : '1px solid rgb(180, 173, 173)'
                                }}
                                onChange={e => {getForm(inputType.useAs, e.target.value);}}
                                type={inputType.type ? inputType.type : null} 
                                name={inputType.name}
                                className={props.inputClass}
                                placeholder={inputType.name}
                                 />
                        </div>
                        )
                    })}
                {props.button ? 
                <Button 
                buttonText={props.buttonName} 
                buttonClass={props.buttonClass} 
                onClick={() =>{buttonFunctionWrapper()}} 
                disabled={location.pathname === '/' || location.pathname === '/signUp'? buttonDisabled : null}/>
                : null
                }   
            </form>
        </div>
    )
}

export default Form