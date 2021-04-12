import React, { useState } from 'react';
import Navigation from '../../../Layout/Navigation';
import {InputsText} from '../../../Components/LoginSign/logSignText';
import List from '../../../Components/List';
import Feed from './components/Feed';

const Main = () => {

    const [following, setFollowing] = useState(false)

    return(
        <div>
            <Navigation
             inputs={InputsText.search[0]}/>
            {following ? 
                <Feed/>
                :
                <List/>
            }
        </div>
    )
}

export default Main