import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react"
import { Heading, useColorMode, toggleColorMode } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'


const Header = () => {

  const { colorMode, toggleColorMode } = useColorMode()


  return (
   
    <header>
    <Heading className='h1' as='h1' size='lg'><a href="/">DNDY</a></Heading>
    <nav>
     <ul>
         <li>
            <Link to="./shop"> shop </Link>
         </li>
         <li>
            <Link to="./collectors"> members </Link>
         </li>
         <li>
            <Link to="./artistprofile"> profile </Link>
         </li>
         <li>
            <Link to="./profile"> login </Link>
         </li>
         <li>
            <SunIcon onClick={toggleColorMode}/>
         </li>

     </ul>
    </nav>
</header>
  );
};

export default Header;
