import React from 'react';
import avatar from '../../../Assets/menu/avatar.png'
import {Link} from 'react-router-dom';

const ListItem = (props) => {

    return(
        <Link to='' style={{textDecoration:'none'}}>
            <div className='listItem'>
                <img className='listItem__avatar' src={props.info.avatar ? props.info.avatar : avatar} alt='avatar'/>
                <div className='listItem__container'>
                    <p className="listItem__heading">{props.info.username}</p>
                    <p className='listItem__text'>{props.info.full_name}</p>
                </div>
            </div>
        </Link>
    )
}

export default ListItem