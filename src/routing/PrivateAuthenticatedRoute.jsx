import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateAuthenticatedRoute =({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
        window.localStorage.getItem('authenticated') == 'true' ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateAuthenticatedRoute