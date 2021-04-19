import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';
import TextBlock from '../TextBlock/TextBlock.jsx';
import TextBlocks from '../TextBlock/TextBlockText.jsx'

const List = (props) => {

    const searched = {'type':'search'}
    const [info, setInfo] = useState()

    useEffect(()=> {
        if (!props.following){
            searched['searched'] = 'random'
            getList(searched)
        }
    },[])

    useEffect(()=> {
        if (props.searched){
            searched['searched'] = props.searched
            getList(searched)
            props.setSearchError(true)
        }
    },[props.searched])

    const getList = (searched) => {
        const formData = new FormData()
        for (let [key, value] of Object.entries(searched)){
            formData.append(key, value)
        }
        fetch('http://localhost/backend/main/search.php',{
            method: 'POST',
            mode: 'cors',
            body:formData
        }).then(response => response.json())
        .then( result => setInfo(result))
    }
   
    if (info && info.length >= 1){
        return(
            <div className={props.listDiv}>
                {info.map((element, i)=> {
                    return(
                        <ListItem 
                        key={element+i}
                        info={element}/>
                    )
                })}
            </div>
        )
    } else if (info && info.search == 'notFound'){
        return(
            <div>
                <TextBlock text={TextBlocks.textBlock10}/>
            </div>
        )
    }
    else {
        return null
    }   
}

export default List