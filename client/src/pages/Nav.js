import React from "react";
import {Link} from "react-router-dom";


function Nav() {
  return (
    <div>
     <ul>
         <li>
            <Link to="./"> Home </Link>
         </li>
         <li>
            <Link to="./shop"> Shop </Link>
         </li>
         <li>
            <Link to="./profile"> Profile </Link>
         </li>
         <li>
            <Link to="./member"> Members </Link>
         </li>
     </ul>
    </div>
  );
}

export default Nav;