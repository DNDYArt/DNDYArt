import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button,
            useDisclosure,
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
         } from "@chakra-ui/react"
import { Heading, useColorMode, toggleColorMode } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'
import { UserContext } from '../../utils/UserContext'; // Important for current user
import LogInModal from '../LogInModal';

import Auth from '../../utils/auth';

const Header = () => {
   const context = useContext(UserContext) // Important for current user

  const { colorMode, toggleColorMode } = useColorMode()

  const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()

  return (

<>
   <header>
    <Heading className='h1' as='h1' size='lg'><Link to="/"> DNDY </Link></Heading>
    <nav>
     <ul>
         <li>
            <Link to="/shop"> shop </Link>
         </li>
         { !context.currentUser.loggedIn && (<li>
            <Link to="/collectors"> become a collector </Link>
         </li>)}
         { context.currentUser?.userType === 'artist' &&(<li>
            <Link to="/artistprofile"> profile </Link>
         </li>)}
         {/* {context.currentUser?.userType === 'collector' &&(<li>
            <Link to="/collectorprofile"> profile </Link>
         </li>)} */}
         {!context.currentUser.loggedIn &&(<li>
            {/* <Link to="/loggin"> log in </Link> */}
            <LogInModal />
         </li>)}
         {context.currentUser.loggedIn &&(<li>
            <Link onClick={()=>{
               context.logoutUser();
               Auth.logout()
            }
               } to="/"> logout </Link>
         </li>)}
         <li>
            <SunIcon onClick={toggleColorMode}/>
         </li>
      </ul>
      </nav>
   </header>
   
</>

  );
};

export default Header;
