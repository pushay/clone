import React from 'react';
import LinkItem from '../../../Components/Link';
import TextBlock from '../../../Components/TextBlock';
import TextBlocks from '../../../Components/TextBlock/TextBlockText';


const MenuDropdown = (props) => {

    const logOut = () => {
        window.localStorage.removeItem('authenticated');
    }
    
    if (props.menu){
        return(
            <div className='menuDropdown menuDropdown__menu'>
                {props.menu ? 
                    props.menu.map((el,i) => {
                        return(
                            <LinkItem
                            onClick={el.text == "Log out" ? () => logOut() : null}
                            linkItemClass={props.linkItemClass} 
                            key={el+i} 
                            link={el}/>  
                        )
                    })
                    : null
                }

            </div>
        )
    }
    else return(
        <div className='menuDropdown menuDropdown__notification'>
            <TextBlock text={TextBlocks.textBlock11}/>
        </div>
    )
}

export default MenuDropdown