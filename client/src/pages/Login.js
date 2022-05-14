import { useContext } from "react";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../utils/UserContext";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_COLLECTOR } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) =>{

  const context = useContext(UserContext);

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_COLLECTOR);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };


  async function loginArtist(e) {
    e.preventDefault()
    const loginInfo = {email: e.target.email.value, password: e.target.password.value}
    if (loginInfo.email && loginInfo.password) {
      const response = await fetch('/api/artists/login',
      {
        method:'PUT',
        body:JSON.stringify(loginInfo),
        headers: { 'Content-Type': 'application/json' }
      })
  
      if (response.ok) {
        const data = await response.json()
          context.setCurrentUser({...context.currentUser ,
            'loggedIn': true, 
            'userType': 'artist', 
            'firstName': data.first_name, 
            'lastName': data.last_name,
            'bio': data.bio,
            'location': data.location,
            'email': data.email})
      } else {
        alert('Email or Password incorrect')
      }
    } else {
      alert('Please enter something')
    }
  }


  return (  // This needs some actual formatting. Just adding it so that I can test logging in and altering the userContext provider
    <>
    <div> {context.currentUser.firstName + ' ' + context.currentUser.lastName} </div>

    <form onSubmit={LOGIN_COLLECTOR}>
      <h2>Collector Login</h2>
      <div>
        <input name='email' type='email' placeholder='email'  style={{'color': 'black'}}/>
      </div>
      <br/>
      <div>
        <input name='password' type='password' placeholder='password' style={{'color': 'black'}}/>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
    <br/>
    <form onSubmit={loginArtist}>
      <h2>Artist Login</h2>
      <div>
        <input name='email' type='email' placeholder='email' style={{'color': 'black'}}/>
      </div>
      <br/>
      <div>
        <input name='password' type='password' placeholder='password'  style={{'color': 'black'}}/>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
    </>
  )
}

export default Login;