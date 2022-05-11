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
    useDisclosure
  } from '@chakra-ui/react'

  import React from 'react'
  
  const ArtistSignUp = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <div>ArtistSignUp</div>
    )
  }
  
  export default ArtistSignUp