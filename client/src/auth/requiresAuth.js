import React from 'react';

export default function(Component) {
  return function Authenticated() {
    const token = localStorage.getItem('jwt');
    const notAuthorized = 
      <div>
        Please Log In to view jokes.
      </div>
    return(
      <>
        {token ? 
          <Component />
          : notAuthorized
        }
      </>
    );
  }
}