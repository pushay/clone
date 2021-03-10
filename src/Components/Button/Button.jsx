import React from 'react';

function Button(props){

    return(
        <div>
            <button type='button' disabled={props.disabled ? props.disabled : null} onClick={props.onClick ? props.onClick : null}  className={props.buttonClass}>{props.buttonText}</button>
        </div>
    )
}

export default Button

