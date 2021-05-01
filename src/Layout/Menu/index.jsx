import React, {useState} from 'react';
import LinkItem from '../../Components/Link';
import {MenuList} from '../Menu/menuText';
import MenuDropdown from '../Menu/MenuDropdown';

const Menu = (props) => {

    const [MenuDropdownchoice, setMenuDropdownChoice] = useState(MenuList.menuDropdown)
    const [showMenuDropdown, setShowMenuDropdown] = useState(true)

    const changeDropdown = (content) => {
        setShowMenuDropdown(!showMenuDropdown)
        if (content == 'MenuList.menuDropdown'){
            setMenuDropdownChoice(MenuList.menuDropdown)
        } else setMenuDropdownChoice(null)
    }

    return(
        <div className='menu'>
            {props.menuList.map((link, i) => {
                return(
                    <LinkItem
                    onClick={()=> {changeDropdown(link.name)}}
                    link={link} 
                    key={link+i}/>
                )
            })}
            {showMenuDropdown === true ?
            <MenuDropdown 
            menu={MenuDropdownchoice}/>
            : null}
        </div>
    )
}

export default Menu