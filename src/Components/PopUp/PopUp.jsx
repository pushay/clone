import React from 'react';

function PopUp(props){

    return(
        <div className={props.popUpClass}>
            {props.messages.map((message, index) => {
                return(
                    <p key={message[index]} className={props.class}>{message}</p>
                )
            }) }
        </div>
    )
}

export default PopUp