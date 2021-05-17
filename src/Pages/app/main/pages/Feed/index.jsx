import React,{useState} from 'react';
import List from '../../../../../Components/List'
import Posts from '../../../../../Components/Posts';
import TextBlock from '../../../../../Components/TextBlock';
import TextBlocks from '../../../../../Components/TextBlock/TextBlockText';

const Feed = (props) => {

    const [searchedError, setSearchError] = useState(false);

    return(
        <div className='feed'>
            {props.following ?
                <Posts/>
            :
            <div className='feed__error'>
                {searchedError ?
                null :
                <TextBlock text={TextBlocks.textBlock9}/>
                }
                <List setSearchError={setSearchError} listDiv='listDiv' searched={props.search} following={props.following}/>
            </div> 
            }
        </div>
    )
}

export default Feed