import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
    <h1>DNDY</h1>
    <nav className="card text-center">
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
         
     </ul>
    </nav>
</header>
  );
};

export default Header;
