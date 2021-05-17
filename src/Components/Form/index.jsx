import React, {useState, useEffect} from 'react';
import Button from '../Button';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Input from '../Input';

function Form(props){

    const [loginForm, setLoginForm] = useState({})
    const [signUpForm, setSignUpForm] = useState({})
    const [buttonDisabled, setButtonState] = useState(true)
    const [signRedInputs, setSignRedInputs] = useState([])
    const [verificationCode, setVerificationCodeInput] = useState({})
    
    const location = useLocation();
    const history = useHistory();

    useEffect( () => {
        validateForm()
        hidePopUp()
    },[loginForm, signUpForm, verificationCode, location.pathname])

    const cleanMessages = () => {
        props.setPopUpMessages([])
        props.setShowPopUp(false)
    }

    const clearForm = () => {
        document.querySelectorAll('input').forEach(el => el.value = '')
        setSignUpForm({})
        setLoginForm({})
    }

    useEffect( ()=>{
        return () => {
            setSignRedInputs([])
            cleanMessages()
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

    const showPopup = (type) => {
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

        if (location.pathname === '/signUp/verify'){
            let checkArray = props.popUpMessages;

            if (type == 'unactivated' ){
                if (!checkArray.includes('Incorrect code')){
                    checkArray.push('Incorrect code')
                }
            }
            props.setPopUpMessages(checkArray)
            setTimeout(()=> {
                props.setShowPopUp(true);
            },1000)

            setTimeout(()=> {
                cleanMessages()
            },5000)
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
            } else setButtonState(true)
        } 
        if (location.pathname === '/signUp'){
            if (signUpForm.number && signUpForm.email && signUpForm.fullName && signUpForm.username && signUpForm.password &&
                signUpForm.number.length >= 3 && signUpForm.fullName.length >= 3 && signUpForm.username.length >= 3 && signUpForm.email.length >= 3 && signUpForm.password.length >= 3){
                setButtonState(false)
            } else setButtonState(true);
        }
        if (location.pathname === '/signUp/verify'){
            if ((verificationCode.verificationCode && verificationCode.verificationCode.length == 4) ){
                setButtonState(false)
            } else setButtonState(true)
        }
    }

    const checkForm = () => {
        const login = 'http://localhost/backend/auth/login.php'
        const sign = 'http://localhost/backend/auth/signup.php'
        const verificateEmail = 'http://localhost/backend/auth/verificateEmail.php'

        if (props.popUpMessages && props.popUpMessages.length == 0){
            if (location.pathname === '/'){
                postSignUpForm(loginForm, 'login', login)
            }

            if (location.pathname === '/signUp'){
                postSignUpForm(signUpForm, 'signUp', sign)
            }
            if (location.pathname === '/signUp/verify'){
                postSignUpForm(verificationCode, 'verificateCode', verificateEmail)
            }
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

        if (response.loggedIn == false){
            messageArray.push('Wrong password');
        }
        if (response.loginError == 'accountNotExisting'){
            messageArray.push("Account with these credentials does not exist. Please sign up")
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
                if (location.pathname === '/'){
                    window.localStorage.setItem('usephemail',form.usephemail)
                    if (response["loggedIn"] == true){
                        window.localStorage.setItem('authenticated',true)
                        clearForm();
                        history.push('/main')
                    } else changeFormIfDataExists(response)
                }
                if (location.pathname === '/signUp/verify'){
                    if (response.activated == false){
                        showPopup('unactivated')
                    } 
                    if (response.activated == true){
                        history.push('/main')
                    }
                }
            })
    }

    const buttonFunctionWrapper = () => {
        showPopup()
        redingInputs()
        checkForm()
    }

    return(
        <div className='form__formContainer'>
            <form className='form__formArea'
             id='form'>
                {props.inputs.map((inputType, i)=> {
                    return(
                        <Input
                        onChange={props.onChange}
                        inputClass={props.inputClass}
                        loginForm={loginForm}
                        setLoginForm={setLoginForm}
                        signUpForm={signUpForm}
                        setSignUpForm={setSignUpForm}
                        verificationCode={verificationCode}
                        setVerificationCodeInput={setVerificationCodeInput}
                        key={[props.inputs]+inputType.name+[i]}
                        style={{border: (signRedInputs[i] === 1) ?
                            '1px solid red' : '1px solid rgb(180, 173, 173)'}} 
                        inputType={inputType} />
                        )
                    })}
                {props.button ? 
                <Button 
                buttonText={props.buttonName} 
                buttonClass={props.buttonClass} 
                onClick={() =>{buttonFunctionWrapper()}} 
                disabled={props.inputs ? buttonDisabled : null}/>
                : null}   
            </form>
        </div>
    )
}

export default Form