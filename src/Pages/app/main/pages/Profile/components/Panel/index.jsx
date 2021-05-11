import React, {useEffect, useState} from 'react';
import Button from '../../../../../../../Components/Button'
import avatar from '../../../../../../../Assets/menu/avatar.png'

const Panel = () => {

    const [userInfo, setUserInfo] = useState()

    const getUserInformation = () => {
        let formData = new FormData()
        formData.append('email', window.localStorage.getItem('email'))
        formData.append('type','getUser')

        fetch('http://localhost/backend/main/user.php', {
        method:'POST',
        mode: 'cors',
        body:formData
        }).then(response => response.json()).then( res => setUserInfo(res));
    }

    useEffect(()=> {
        if (window.localStorage.getItem('email')){
            getUserInformation()
        }
    },[])

    if (userInfo){
        return(
            <div className='panel'>
                <img className={userInfo['avatar'] ? 'panel__avatar': 'panel__icon'}
                 src={userInfo['avatar'] ?userInfo['avatar'] : avatar }
                alt=''/>
                <div className='panel__info'>
                    <div className='panel__text'>
                        <h1 className='panel__heading'>{userInfo['username']}</h1>
                        <Button buttonClass='button button--small' buttonText='Edit Profile'/>
                    </div>
                    <div className='panel__text'>
                        <span className='panel__span'>{userInfo['posts']} posts</span>
                        <span className='panel__span'>{userInfo['followers']} followers</span>
                        <span className='panel__span'>{userInfo['following']} following</span>
                    </div>
                    <div className='panel__text'>
                        <h2>{userInfo['full_name']}</h2>
                    </div>      
                </div>
            </div>
        )
    }
    else return null
}

export default Panel