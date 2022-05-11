import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer>
      <div className='lineOne'><h5 className='h5'>© 2022 DNDY Art Curators | Made with REACT | Repo this on <span><a href='https://github.com/DNDYArt'>GITHUB</a></span></h5></div>
      <div className='lineTwo'><Link  to="./profile" className='artistLink'>Artist Portal</Link></div>
    </footer>
    </>
  );
};

export default Footer;
