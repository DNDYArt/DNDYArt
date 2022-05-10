import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react"
import { Heading } from '@chakra-ui/react'


const Header = () => {

  return (
    <header>
    <Heading className='h1' as='h1' size='lg'>DNDY</Heading>
    <nav>
     <ul>
         <li>
            <Link to="./shop"> shop </Link>
         </li>
         <li>
            <Link to="./member"> members </Link>
         </li>
         <li>
            <Link to="./profile"> profile </Link>
         </li>
         <li>
            <Link to="./profile"> login </Link>
         </li>
         <li>
         <i className="fa-regular fa-sun" />
         </li>

     </ul>
    </nav>
</header>
  );
};

export default Header;
