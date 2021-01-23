import React, { useState } from 'react';
import transparentPhone from '../Assets/transparentPhone.png';
import Button from '../Components/Button';

function LogSign(props){

    const LoginsText = {
        loginInput : ['username','password'],
        signInput : []
    }

    const [usernamePassword, setUserNamePassword] = useState({})
    const [buttonState, setButtonState] = useState(false)

    const getForm = (input, inputValue) => {
        setUserNamePassword({...usernamePassword, [input]:inputValue});
        console.log(usernamePassword)
    }

    return(
        <div className='logSign'>
            { 
            props.login ? 
            <div className='logSign__presentation'>
                <img className='logSign__photo' src={transparentPhone} alt=""/>
            </div>
            : null 
            }
            <div 
            className="logSign__Instagram">
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
                         <Button text='Log in' disabled={buttonState}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogSign

