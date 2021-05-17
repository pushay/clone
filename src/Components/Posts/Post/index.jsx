import React from 'react';
import heart from '../../../Assets/menu/heart.png';
import bubble2 from '../../../Assets/bubble2.png';
import compass from '../../../Assets/menu/compass.png';
import bookmark from '../../../Assets/menu/bookmark.png'

const Post = (props) => {
    return(
        <div className='post'>
            <div className='post__info'>
                <img src='' alt=''/>
                <scan>{props.post.username}</scan>
            </div>
            <div className='post__slides'>
                {props.post.images.length > 1 ?
                props.post.slide.map((img)=> {
                    return(
                        <img src={img} alt=''/>
                    )
                }) 
                :
                <img src={props.post.img} alt=''/>
                }
            </div>
            <div className='post__actions'>
                <div className='post__basicActions'>
                    <img src={heart} alt='liked'/>
                    <img src={bubble2} alt='comment'/>
                    <img src={compass} alt='share'/>
                </div>
                <img src={bookmark} alt='saved'/>
            </div>
        </div>
    )
}

export default Post