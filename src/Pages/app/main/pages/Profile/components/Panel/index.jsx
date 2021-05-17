import React from 'react';
import Button from '../../../../../../../Components/Button'
import avatar from '../../../../../../../Assets/menu/avatar.png'


const Panel = (props) => {

    if (props.userInfo){
        return(
            <div className='panel'>
                <img className={props.userInfo['avatar'] ? 'panel__avatar': 'panel__icon'}
                 src={props.userInfo['avatar'] ?props.userInfo['avatar'] : avatar }
                alt=''/>
                <div className='panel__info'>
                    <div className='panel__text'>
                        <h1 className='panel__heading'>{props.userInfo['username']}</h1>
                        <Button buttonClass='button button--small' buttonText='Edit Profile'/>
                        <Button buttonClass='button button--small' buttonText="Add the Post"/>
                    </div>
                    <div className='panel__text'>
                        <span className='panel__span'>{props.userInfo['posts']} posts</span>
                        <span className='panel__span'>{props.userInfo['followers']} followers</span>
                        <span className='panel__span'>{props.userInfo['following']} following</span>
                    </div>
                    <div className='panel__text'>
                        <h2>{props.userInfo['full_name']}</h2>
                    </div>      
                </div>
            </div>
        )
    }
    else return null
}

export default Panel