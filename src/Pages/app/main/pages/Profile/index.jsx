import React, { useState, useEffect } from 'react';
import Panel from './components/Panel';
import Posts from '../../../../../Components/Posts';
import {useHistory} from 'react-router-dom';

function Profile(){

    const [userInfo, setUserInfo] = useState()

    const history = useHistory()

    const getUserInformation = () => {

        let formData = new FormData()
        formData.append('usephemail', window.localStorage.getItem('usephemail'))
        formData.append('type','getUser')

        fetch('http://localhost/backend/main/user.php', {
        method:'POST',
        mode: 'cors',
        body:formData
        }).then(response => response.json()).then( res => setUserInfo(res));
    }

    useEffect(()=> {
        if ( window.localStorage.getItem('usephemail') && window.localStorage.getItem('authenticated') == 'true'){
            getUserInformation()
        } else {
            history.push('/')
            window.localStorage.removeItem('authenticated');
        }
    },[])


    return(
        <div className='profile'>
            <Panel userInfo={userInfo}/>
            <Posts userInfo={userInfo}/>
        </div>
    )
}

export default Profile