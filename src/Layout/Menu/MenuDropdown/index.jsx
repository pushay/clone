import React from 'react';
import LinkItem from '../../../Components/Link';

const MenuDropdown = (props) => {
    return(
        <div className='menuDropdown'>
            {props.menu ? 
                props.menu.map((el,i) => {
                    return(
                        <LinkItem key={el+i} link={el}/>  
                    )
                })
                : null
            }
        </div>
    )
}

export default MenuDropdown