import React from 'react';
import { Link } from 'react-router-dom';

import '../NavBar/NavBar.css';

const NavBar = () => {
  return (
    <div className='nav_cnt'>
        <div className='nav_cnt-logo'>L</div>
        <ul>
            <li>Home</li> 
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default NavBar