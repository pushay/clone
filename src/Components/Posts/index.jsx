import React, { useEffect, useState } from 'react';
import TextBlock from '../TextBlock';
import TextBlocks from '../TextBlock/TextBlockText';
import Post from '../../Components/Posts/Post'


const Posts = (props) => {

    const [userPosts, setUserPosts] = useState([])

    useEffect(()=> {
        if (props.userInfo && props.userInfo.posts > 0){
            fetchPosts()
        } 
    },[])

    const fetchPosts = () => {
        let form = [ {'type':'getPosts'},{'posts': props.info.posts}, {'email':props.userInfo.email}]
        let formData = new FormData()
        for (const [key, value] of form) {
            formData.append(key,value)
        }

        fetch('http://localhost/backend/main/user.php', {
        method:'POST',
        mode:'cors',
        body:formData
        }).then(response => response.json()).then( res => setUserPosts(res))
        
    }
    if (props.userInfo && props.userInfo.posts > 0){
        return(
            <div className='posts'>
                {userPosts.map((post) => {
                    return(
                        <Post post={post}/>
                    )
                })}
            </div>
        )
    } else {
        return(
            <div className='posts'>
               <TextBlock text={TextBlocks.textBlock12}/>
            </div>
        )
    }
}

export default Posts