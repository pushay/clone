import React from 'react';
import {Switch } from 'react-router-dom';
import PrivateAuthenticatedRoute from './PrivateAuthenticatedRoute';
import Feed from '../Pages/app/main/pages/Feed';
import Profile from '../Pages/app/main/pages/Profile';
import Saved from '../Pages/app/main/pages/Saved';
import Settings from '../Pages/app/main/pages/Settings';

function MainRouting(props){

        return(
            <Switch>
                <PrivateAuthenticatedRoute exact path='/main'>
                    <Feed search={props.search} following={props.following}/>
                </PrivateAuthenticatedRoute>
                <PrivateAuthenticatedRoute path="/main/profile">
                    <Profile/>
                </PrivateAuthenticatedRoute>
                <PrivateAuthenticatedRoute path="/main/saved" >
                    <Saved/>
                </PrivateAuthenticatedRoute>
                <PrivateAuthenticatedRoute path="/main/settings" >
                  <Settings/>
                </PrivateAuthenticatedRoute>
            </Switch>
        )
} 

export default MainRouting
