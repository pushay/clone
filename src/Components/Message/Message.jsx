import React, {useState} from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import TextBlock from '../TextBlock/TextBlock';
import TextBlocks from '../TextBlock/TextBlockText';
import { useLocation } from 'react-router-dom';


function Message(props){

    const [verificationCode, setVerificationCodeInput] = useState()

    const location = useLocation();

    const attachFunction = () => {
        if (location.pathname === '/message'){
            return () => {}
        }
    }
    return(
        <div className={props.modaldivClass}>
            <div className='textBlock__question textBlock__question--column'>
                <TextBlock text={props.textBlock1}/>
                <TextBlock text={props.textBlock2}/>
                {props.form ? 
                 <Form inputClass={props.inputClass} inputs='confirmInput' setVerificationCodeInput={setVerificationCodeInput} />
                 : null}
                {props.button ?
                <Button buttonClass='button button--confirm' onClick={attachFunction()} buttonText={props.buttonName}/>
                : null}
            </div>
            {props.quantity == 2 ?
                <div className='textBlock__question textBlock__question--column'>
                    <TextBlock text={TextBlocks.textBlock6} />
                    <Button buttonClass='button button--confirm' buttonText={props.buttonName1}/>
                </div>
            : null 
            }
        </div>
    )
}

export default Message