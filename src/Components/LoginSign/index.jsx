import React, { useState} from 'react';
import TextBlock from '../TextBlock';
import TextBlockTexts from '../TextBlock/TextBlockText';
import Form from '../Form';
import PopUp from '../PopUp/PopUp';
import Button from '../Button';



function LogSign(props){

   const [showPopUp, setShowPopUp] = useState(false)
   const [popUpMessages, setPopUpMessages] = useState([])
        
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

