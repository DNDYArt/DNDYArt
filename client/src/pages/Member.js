
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
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    CloseButton
  } from '@chakra-ui/react'
  import React from 'react'
  
  const CollectorSignUp = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <div className='vh'>
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
            <GridItem bg='tomato' className='gridTitle' colSpan={2}>Why DNDY?</GridItem>
            <GridItem bg='tomato' className='gridContent' colSpan={4}>DNDY is a trusted source for the finest art available. Pieces that are featured in our store immediately gain recognition in the community of collectors and artists. Every piece that we sell comes with a DNDY signed certificate of authenticity.</GridItem>
            <GridItem bg='tomato' className='gridTitle' colSpan={2}>First-Class Treatment</GridItem>
            <GridItem bg='tomato' className='gridContent' colSpan={4}>Here at DNDY we realize that we simply would not exist without you. That is why we treat our collectors with the utmost respect. Our staff responds promptly to questions and concerns. Customer satisfaction is our top priority.</GridItem>
            <GridItem bg='tomato' className='gridTitle' colSpan={2}>Product Handling</GridItem>
            <GridItem bg='tomato' className='gridContent' colSpan={4}>You don't have to do a thing. Once you win the auction, our team will reach out immediately to arrange a product delivery plan that best suites you. And rest assured, we have the best insurance money can buy.</GridItem>
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
                <FormLabel>Location</FormLabel>
                <Input placeholder='City' />
                <Input placeholder='State (if USA) or Country' />
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
      </div>
    )
  }
  
  export default CollectorSignUp