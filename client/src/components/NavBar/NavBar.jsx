import React from 'react';
import { Link } from 'react-router-dom';

import '../NavBar/NavBar.css';

const NavBar = () => {
  return (
    <div className='nav_cnt'>
        <div className='nav_cnt-logo'></div>
        <ul>
            <li>Sobre mi</li>
            <li>Proyectos</li>
            <li>Contacto</li>
        </ul>
        <div className='mode-cnt'>
          
        </div>
    </div>
  )
}

export default NavBar