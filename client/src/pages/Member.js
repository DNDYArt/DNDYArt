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
  
  const CollectorSignUp = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    function handleFormSubmit(e) {
      const children = e.target.parentNode.parentNode.childNodes[2].childNodes
      let childInputs = {}
      for (let child of children){
        let key = child.childNodes[1].id
        let value = child.childNodes[1].value
        childInputs[key] = value
      }
      sendSubmissionInfo(childInputs)
    }

    function sendSubmissionInfo(inputInfo) {
      // Do something with the submitted information
      // inputInfo param should be passed in as an object of input names and their respective values given by the user
      console.log(inputInfo);
    }
  
    return (
      <>
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
            <GridItem className='gridContent' colSpan={4}>DNDY is a trusted source for the finest art available. Pieces that are featured in our store immediately gain recognition in the community of collectors and artists. Every piece that we sell comes with a DNDY signed certificate of authenticity.</GridItem>
            <GridItem className='gridTitle' colSpan={2}>First-Class Treatment</GridItem>
            <GridItem className='gridContent' colSpan={4}>Here at DNDY we realize that we simply would not exist without you. That is why we treat our collectors with the utmost respect. Our staff responds promptly to questions and concerns. Customer satisfaction is our top priority.</GridItem>
            <GridItem className='gridTitle' colSpan={2}>Product Handling</GridItem>
            <GridItem className='gridContent' colSpan={4}>You don't have to do a thing. Once you win the auction, our team will reach out immediately to arrange a product delivery plan that best suites you. And rest assured, we have the best insurance money can buy.</GridItem>
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
                <Input id='firstName' ref={initialRef} placeholder='First name' />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input id='lastName' placeholder='Last name' />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Location</FormLabel>
                <Input id='city' placeholder='City' />
                </FormControl>
                <FormControl mt={4}>
                <FormLabel>{/* Don't put anything in here */}</FormLabel>
                <Input id='stateCountry' placeholder='State (if USA) or Country' />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input id='email' placeholder='Email' />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                    id='password'
                    placeholder='Password'
                    type='password' />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button onClick={handleFormSubmit} colorScheme='blue' mr={3}>
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
      </>
    )
  }
  
  export default CollectorSignUp