import React from 'react';

function Button(props){

    return(
        <div className={props.buttonDivclassName}>
            <button type='button' disabled={props.disabled ? props.disabled : null} className='button'>{props.text}</button>
        </div>
    )
}

export default Button
