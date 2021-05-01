import React from 'react';
import {Link} from 'react-router-dom';

const LinkItem = (props) => {

    return(
        <div className='linkItem'>
            {props.link.link ?
            <Link
            className='linkItem__link'
            to={props.link.link}>
                <img
                onClick={props.link.onClick ? props.onClick : null} 
                className='linkItem__icon' 
                src={props.link.icon} 
                alt={props.link.icon}/>
                {props.link.text ?
                <span>{props.link.text}</span>
                :null
                }     
            </Link>
            : 
            <span className='linkItem__link'>
                <img
                onClick={props.link.onClick ? props.onClick : null}  
                className='linkItem__icon' 
                src={props.link.icon} 
                alt={props.link.icon}/>
                {props.link.text ?
                <span>{props.link.text}</span>
                :null
                }  
            </span>
            }
        </div>
    )
}

export default LinkItem