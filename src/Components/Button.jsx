import React from 'react';

function Button(props){

    console.log(props)
    return(
        <div className={props.buttonDivclassName}>
            <button disabled={props.disabled} className='button'>{props.text}</button>
        </div>
    )
}

export default Button

// style={props.stateUsernamePassword ? enabledColor : disabledColor}