import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Heading } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer>
      <Heading className='h5' as='h5' size='sm'>
      © 2022 DNDY Art Curators | Made with REACT | Repo this on <span><a href='https://github.com/DNDYArt'>GITHUB</a></span>
      </Heading>
    </footer>
  );
};

export default Footer;
