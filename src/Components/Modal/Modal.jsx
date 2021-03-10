import React from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import TextBlock from '../TextBlock/TextBlock';
import TextBlocks from '../TextBlock/TextBlockText';


function Modal(props){
    return(
        <div className={props.modaldivClass}>
            <div className='textBlock__question textBlock__question--column'>
                <TextBlock text={TextBlocks.textBlock4}/>
                <TextBlock text={TextBlocks.textBlock5}/>
                {props.form ? 
                 <Form inputClass={props.inputClass} inputs='confirmInput'/>
                 : null     
                }
                {props.button ?
                <Button buttonClass='button button--confirm' buttonText={props.buttonName}/>
                : null}
            </div>
        </div>
    )
}

export default Modal