import React, {useState } from 'react';
import Navigation from '../../../Layout/Navigation';
import {InputsText} from '../../../Components/LoginSign/logSignText';
import MainRouting from '../../../routing/mainRouting';

const Main = () => {

    const [following, setFollowing] = useState(false)
    const [search, setSearch] = useState()

    return(
        <div>
            <Navigation
            setSearch={setSearch}
             inputs={InputsText.search[0]}/>
            <MainRouting search={search} following={following} />
        </div>
    )
}

export default Main