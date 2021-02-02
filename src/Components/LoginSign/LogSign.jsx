import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import {LogSignTexts} from './LogSignText';
import TextBlock from '../TextBlock/TextBlock';
import TextBlockTexts from '../TextBlock/TextBlockText';
import Form from '../Form/Form';

function LogSign(props){

    return(
        <div className='logSign' style={{padding:props.inputs === 'loginInput' ? '11.5rem 2rem' : '9.5rem 2rem'}}>
            {props.imageSlider === 'login' ? 
                <ImageSlider imageSlider='login'/>
            : null 
            }
            <div 
            className="logSign__Instagram">
                <div className='logSign__log'>
                    <TextBlock text={TextBlockTexts.textBlock1} />
                    <Form inputs={props.inputs}/>
                    {props.question === 'login' ? 
                    <p className='logSign__bellowParagraph'>{LogSignTexts.signup.belowText}</p>
                        : null    
                    } 
                </div>
                <TextBlock text={props.textBlock}/>
            </div>
            
        </div>
    )
}

export default LogSign

