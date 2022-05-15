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
  import React from 'react'


function LoginModal() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    const context = useContext(UserContext);
  
    async function loginCollector(e) {
      e.preventDefault()

      const collEmail = e.target.parentNode.parentNode.childNodes[0].childNodes[1].value;
      const collPass = e.target.parentNode.parentNode.childNodes[1].childNodes[1].value;

      const loginInfo = {email: collEmail, password: collPass}
      if (loginInfo.email && loginInfo.password){
        const response = await fetch('/api/collectors/login',
        {
          method:'PUT',
          body:JSON.stringify(loginInfo),
          headers: { 'Content-Type': 'application/json' }
        })
    
        if (response.ok) {
          const data = await response.json()
          context.setCurrentUser({...context.currentUser ,
            'loggedIn': true, 
            'userType': 'collector', 
            'firstName': data.first_name, 
            'lastName': data.last_name, 
            'email': data.email})
        } else {
          alert('Email or Password incorrect')
        }
      } else {
        alert('Please enter something')
      }
    }
  
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

                <FormControl mt={4} onSubmit={loginCollector}>
                <FormLabel>Collector</FormLabel>
                <Input 
                    id='collectorEmail'
                    type='email'
                    placeholder='Email'
                     />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel></FormLabel>
                <Input
                    id='collectorPassword'
                    type='password'
                    placeholder='Password'
                     />
                </FormControl>

                <ModalFooter>
                    <Button onClick={loginCollector} colorScheme='blue' mr={3}>Save</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>

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
