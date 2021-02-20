import React from 'react';

function Modal(props){

    return(
        <div className={props.modalClass}>
            {props.messages.map((message, index) => {
                return(
                    <p key={message[index]} className={props.class}>{message}</p>
                )
            }) }
        </div>
    )
}

export default Modal