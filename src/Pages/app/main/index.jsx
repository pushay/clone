import React, {useState } from 'react';
import Navigation from '../../../Layout/Navigation';
import {InputsText} from '../../../Components/LoginSign/logSignText';
import List from '../../../Components/List';
import Feed from './components/Feed';
import TextBlock from '../../../Components/TextBlock';
import TextBlocks from '../../../Components/TextBlock/TextBlockText';

const Main = () => {

    const [following, setFollowing] = useState(false)
    const [search, setSearch] = useState()
    const [searchedError, setSearchError] = useState(false);

    return(
        <div>
            <Navigation
            setSearch={setSearch}
             inputs={InputsText.search[0]}/>
            {following ?
                    <Feed/>
                :
                <div className='main'>
                    {searchedError ?
                    null :
                    <TextBlock text={TextBlocks.textBlock9}/>
                    }
                    <List setSearchError={setSearchError} listDiv='listDiv' searched={search} following={following}/>
                </div>    
            }
        </div>
    )
}

export default Main