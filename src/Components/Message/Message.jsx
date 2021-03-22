import React from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import TextBlock from '../TextBlock/TextBlock';
import TextBlocks from '../TextBlock/TextBlockText';

function Message(props){

    return(
        <div className={props.modaldivClass}>
            <div className='textBlock__question textBlock__question--column'>
                <TextBlock text={props.textBlock1}/>
                <TextBlock text={props.textBlock2}/>
                {props.form ? 
                 <Form inputClass={props.inputClass} inputs='confirmInput' button={props.button} buttonName={props.buttonName} buttonClass='button button--confirm' />
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