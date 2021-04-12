import React from 'react';
import Link from '../../Components/Link';

const Menu = (props) => {
    return(
        <div className='menu'>
            {props.menuList.map((link, i) => {
                return(
                    <Link 
                    link={link} 
                    key={link+i}/>
                )
            })}
        </div>
    )
}

export default Menu