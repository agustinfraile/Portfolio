import React from 'react';
import { Link } from 'react-router-dom';
import About from '../../pages/About/About';

import '../NavBar/NavBar.css';

const NavBar = () => {
  return (
    <div className='nav_cnt'>
        <div className='nav_cnt-logo'></div>
        <ul>
          <a href="#sobre-mi">
            <li>Sobre mi</li>
          </a>
          <a href="#projects">
            <li>Proyectos</li>
          </a>
          <a href="#contact">
            <li>Contacto</li>
          </a>
        </ul>
        <div className='mode-cnt'>
          
        </div>
    </div>
  )
}

export default NavBar