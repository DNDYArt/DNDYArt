import React, { useState } from "react";

export const UserContext = React.createContext();

function UserProvider(props) {
<<<<<<< HEAD
	const [currentUser, setCurrentUser] = useState({
		loggedIn: false,
		userType: null,
		firstName: null,
		lastName: null,
		email: null,
		bio: null,
		location: null,
	});
=======
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
>>>>>>> 3f0f7506d3173d97c5a55f2510b1263ee7b8b6ab

	function logoutUser() {
		setCurrentUser({
			loggedIn: false,
			userType: null,
			firstName: null,
			lastName: null,
			email: null,
			bio: null,
			location: null,
		});
	}

	return (
		<UserContext.Provider
			value={{ currentUser, setCurrentUser, logoutUser }}
			{...props}
		/>
	);
}

export default UserProvider;
