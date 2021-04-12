import React, { useEffect, useState} from 'react';
import TextBlock from '../../Components/TextBlock/TextBlock';
import TextBlockTexts from '../../Components/TextBlock/TextBlockText';
import Form from '../../Components/Form/Form';
import PopUp from '../../Components/PopUp/PopUp';
import FbButtion from '../Button/FbButton';
import Button from '../Button/Button';

function LogSign(props){

   const [showPopUp, setShowPopUp] = useState(false)
   const [popUpMessages, setPopUpMessages] = useState([])

    useEffect(() => {
        facebookLogin()
    }, [])

    const facebookLogin = () => {
        if (window.FB) {
            window.FB.Event.subscribe('auth.login', () => {
                getData();
            });
        } else {
            setTimeout(() => facebookLogin(), 1000)
        }
    }

    const getData = () => {
        window.FB.api(
            '/me',
            'GET',
            {"fields":"id, name, email"},
            (response) => {
                fetchSQl(response)
            }
        )
    }

    const fetchSQl = (data) => {
        let fbLogin = new FormData();
        for (let [key, value] of Object.entries(data)){
            fbLogin.append(key, value)
        }
        fbLogin.append('type', 'fbLogin')
        fetch('http://localhost/backend/auth/login.php', {
            method:'POST',
            mode:'cors',
            body: fbLogin
        }).then(response => response.json())
    }

    return(
        <div className={props.logSignDiv}>
            <div 
            className="logSign__Instagram">
                <div className='logSign__log'>
                    {props.logo ?
                    <TextBlock text={TextBlockTexts.textBlock1} />
                    : null}
                    {props.frontText ?
                    <TextBlock text={props.frontText}/>
                    : null}
                    {props.inputs ?
                    <Form
                    onChange
                    inputs={props.inputs}
                    showPopUp={showPopUp}
                    buttonName={props.buttonName}
                    inputClass={props.inputClass}
                    setPopUpMessages={setPopUpMessages}
                    popUpMessages={popUpMessages}
                    button
                    buttonClass={props.buttonClass}
                    setShowPopUp={setShowPopUp}/>
                    :null}
                    {props.fbLogin ?
                    <div className='logSign__facebookButton'>
                        <span className='logSign__divide'>OR</span>
                        <FbButtion/>
                    </div>
                    : null
                    }
                    {props.endText ? 
                        <TextBlock text={props.endText}/>
                    : null}
                    {props.buttonText ?
                    <Button buttonText={props.buttonText} onClick={props.onClick} buttonClass={props.buttonClass}/>
                    : null    
                    }
                </div>
                {props.question ?
                 <TextBlock text={props.question} /> :
                 null
                }             
            </div>
            {showPopUp === true ? 
                <PopUp 
                popUpClass={props.popUpClass} 
                class='popUp__message popUp__message--error'
                messages={popUpMessages}/>  
            : null}
        </div>
    )
}

export default LogSign

