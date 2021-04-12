import React from 'react';
import {Link} from 'react-router-dom';

const LinkItem = (props) => {

    return(
        <div className='linkItem'>
            <Link
            className='linkItem__link'
            to={props.link.link}>
                <img 
                className='linkItem__icon' 
                src={props.link.icon} 
                alt={props.link.icon}/>
            </Link>
        </div>
    )
}

export default LinkItem