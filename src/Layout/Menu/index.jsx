import React, {useState} from 'react';
import LinkItem from '../../Components/Link';
import {MenuList} from '../Menu/menuText';
import MenuDropdown from '../Menu/MenuDropdown';

const Menu = (props) => {

    const [MenuDropdownchoice, setMenuDropdownChoice] = useState(MenuList.menuDropdown)
    const [showMenuDropdown, setShowMenuDropdown] = useState(false)

    const changeDropdown = (content) => {
        setShowMenuDropdown(!showMenuDropdown)
        if (content == 'MenuList.menuDropdown'){
            setMenuDropdownChoice(MenuList.menuDropdown)
        } else {
            setMenuDropdownChoice(null)
        } 
    }

    return(
        <div className='menu'>
            {props.menuList.map((link, i) => {
                return(
                    <LinkItem
                    linkItemSpan='linkItem__nav'
                    linkItemClass='linkItem__nav'
                    onClick={()=> {changeDropdown(link.name)}}
                    link={link} 
                    key={link+i}/>
                )
            })}
            {showMenuDropdown === true ?
            <MenuDropdown
            linkItemClass='linkItem__link' 
            menu={MenuDropdownchoice}/>
            : null}
        </div>
    )
}

export default Menu