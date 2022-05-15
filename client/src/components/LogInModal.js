import "../main.css";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormLabel,
    Input,
    FormControl,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
  import { useContext } from "react";
  import { UserContext } from "../utils/UserContext";
  import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_COLLECTOR } from '../utils/mutations';

import Auth from '../utils/auth';


const LoginModal = (props) =>{

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()

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
    // console.log(formState)
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data);

      context.setCurrentUser({...context.currentUser ,
        'loggedIn': true, 
        'userType': 'collector', 
        'firstName': data.first_name, 
        'lastName': data.last_name,
        'username': data.username,
        'email': data.email})
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

      const artistEmail = e.target.parentNode.parentNode.childNodes[3].childNodes[1].value;
      const artistPass = e.target.parentNode.parentNode.childNodes[4].childNodes[1].value;

      const loginInfo = {email: artistEmail, password: artistPass}
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
              'pfpic': data.pfpURL,
              'email': data.email})
        } else {
          alert('Email or Password incorrect')
        }
      } else {
        alert('Please enter something')
      }
    }

  return (

  <>
    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        >
        <ModalOverlay />
        <ModalContent>
        <ModalHeader className="modalTitle">DNDY Login</ModalHeader>
        <ModalCloseButton />
            <ModalBody pb={6}>
              {data ? (
                   <p>
                   Success! You may now head{' '}
                   <Link to="/">back to the homepage.</Link>
                 </p>
               ) : (
                <><FormControl mt={4} onSubmit={handleFormSubmit} >
                  <FormLabel>Collector</FormLabel>
                  <Input
                    id='collectorEmail'
                    name="email"
                    type='email'
                    placeholder='Email'
                    onChange={handleChange} />
                </FormControl><FormControl mt={4}>
                    <FormLabel></FormLabel>
                    <Input
                      id='collectorPassword'
                      name="password"
                      type='password'
                      placeholder='Password'
                      onChange={handleChange} />
                  </FormControl><ModalFooter>
                    <Button onClick= {handleFormSubmit}colorScheme='blue' mr={3}>Save</Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter></>
               )}
                <FormControl mt={4} onSubmit={loginArtist}>
                <FormLabel>Artist</FormLabel>
                <Input 
                    id='artistEmail'
                    type='email'
                    placeholder='Email' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel></FormLabel>
                    <Input
                        id='artistPassword'
                        type='password'
                        placeholder='Password'
                        />
                </FormControl>

                <ModalFooter>
                    <Button onClick={loginArtist} colorScheme='blue' mr={3}>Save</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>

            </ModalBody>

            
        </ModalContent>
    </Modal>

    <Button className='loginLink' onClick={onOpen} variant='link'>log in</Button>
  </>
  )

}

export default LoginModal;
