import React from 'react';
import {Link} from 'react-router-dom';

const LinkItem = (props) => {

    return(
        <div className='linkItem'>
            {props.link.link ?
            <Link
            className={props.linkItemClass}
            to={props.link.link}>
                <img
                onClick={props.link.onClick ? props.onClick : null} 
                className='linkItem__icon' 
                src={props.link.icon} 
                alt={props.link.icon}/>
                {props.link.text ?
                <span
                onClick={props.link.onClick ? props.onClick : null}   
                className='linkItem__text'>{props.link.text}</span>
                :null
                }     
            </Link>
            : 
            <span className={props.linkItemSpan}>
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