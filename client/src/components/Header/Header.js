import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react"
import { Heading, useColorMode, toggleColorMode } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'
import { UserContext } from '../../utils/UserContext';


const Header = () => {
   const context = useContext(UserContext)

  const { colorMode, toggleColorMode } = useColorMode()


  return (

   
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
         {context.currentUser?.userType === 'collector' &&(<li>
            <Link to="/collectorprofile"> profile </Link>
         </li>)}
         {!context.currentUser.loggedIn &&(<li>
            <Link to="/loggin"> log in </Link>
         </li>)}
         {context.currentUser.loggedIn &&(<li>
            <Link onClick={context.logoutUser} to="/"> logout </Link>
         </li>)}
         <li>
            <SunIcon onClick={toggleColorMode}/>
         </li>
     </ul>
    </nav>
</header>
  );
};

export default Header;
