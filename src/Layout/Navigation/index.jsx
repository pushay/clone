import React from 'react';
import TextBlock from '../../Components/TextBlock/TextBlock';
import TextBlocks from '../../Components/TextBlock/TextBlockText';
import Input from '../../Components/Input';
import Menu from '../Menu';
import {MenuList} from '../Menu/menuText';
import search from '../../Assets/menu/search.png'

const Navigation = (props) => {

    return(
        <div className='navigation'>
            <TextBlock 
            text={TextBlocks.textBlock8}/>
            <Input
            setSearch={props.setSearch} 
            onKeyDown 
            inputType={props.inputs} 
            inputClass='input__input input__input--search' 
            icon={search}/>
            <Menu 
            menuList={MenuList.navigationMenu}/>
        </div>
    )
}

export default Navigation