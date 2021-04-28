import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateUnAuthenticatedRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
        !window.localStorage.getItem('authenticated') ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/main",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateUnAuthenticatedRoute