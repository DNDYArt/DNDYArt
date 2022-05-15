import React, { useState } from 'react';

export const UserContext = React.createContext()

function UserProvider(props) {
  const [currentUser, setCurrentUser] = 
  useState({
    'loggedIn': false,
    'userType': null,
    'firstName': null,
    'lastName' : null,
    'email': null,
    'bio' : null,
    'location' : null,
    'pfpic': null,
    'features': null
  })

  function logoutUser() {
    setCurrentUser({
      'loggedIn': false,
      'userType': null,
      'firstName': null,
      'lastName' : null,
      'email': null,
      'bio' : null,
      'location' : null
    })
  }

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser, logoutUser}} {...props}/>
  )
}

export default UserProvider;
