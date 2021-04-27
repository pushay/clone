import React from 'react';
import {Link} from 'react-router-dom'

function TextBlock(props){
    return(
            <div className={props.text.textBlockDiv}>
            {props.text.heading?
            <h1 className={props.text.heading.textBlockHeading}>{props.text.heading.textHeader}</h1>
            : null 
            }
            {props.text.paragraph ?
            <p className={props.text.paragraph.textBlockParagraph}>{props.text.paragraph.paragraph}</p>
            : null
            }
            {props.text.link ?
            <Link className={props.text.link.linkBlock} 
            to={props.text.link.link}>{props.text.link.linkText}</Link>
            : null}
        </div>
    )
}

export default TextBlock