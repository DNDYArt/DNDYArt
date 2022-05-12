import { useEffect } from 'react'
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
    useDisclosure,
    Grid,
    GridItem,
    Button,
    ChakraProvider,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    CloseButton
  } from '@chakra-ui/react'
  import React from 'react'
  
  const ArtistSignUp = () => {

    // useEffect(() => {
    //     const root = document.getElementById('root');
    //     root.style.display = 'block'
    //     root.style.position = 'relative'
    // })

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <>
      <ChakraProvider>
        <section className='artistContainer'>
            <h1 className='welcomeArtist'>Welcome to DNDY</h1>
        </section>

        <div className='gridParent'>
        <Grid
            h='300px'
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={4}
            >
            <GridItem className='gridTitle' colSpan={2}>Why DNDY?</GridItem>
            <GridItem className='gridContent' colSpan={4}>DNDY provides an elite platform for selling the finest art. With followers around the world, a feature on our sites brings unmatched notoriety.</GridItem>
            <GridItem className='gridTitle' colSpan={2}>First-Class Treatment</GridItem>
            <GridItem className='gridContent' colSpan={4}>Here at DNDY we realize that we simply would not exist without you. That is why we treat our artists with the utmost respect. Our staff responds promptly to questions and concerns. Our artists always come first.</GridItem>
            <GridItem className='gridTitle' colSpan={2}>Product Handling</GridItem>
            <GridItem className='gridContent' colSpan={4}>You don't have to do a thing. Our team will come to you, and deliver the piece to the buyer. No matter what. And rest assured, we have the best insurance money can buy.</GridItem>
        </Grid>
        </div>

        <div className='btnDiv'><Button onClick={onOpen} colorScheme='green'>Create Account</Button></div>
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                    placeholder='Password'
                    type='password' />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3}>
                Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Application submitted!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                Thanks for submitting your application. Our team will get back to you soon.
            </AlertDescription>
        </Alert> */}

      </ChakraProvider>
      </>
    )
  }
  
  export default ArtistSignUp