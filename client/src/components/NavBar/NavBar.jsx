import React from 'react';
import cv from '../../assets/images/icons/cv-logo.png'
import pdf from '../../assets/pdf/cv.pdf'
import '../NavBar/NavBar.css';

const NavBar = () => {

  const handleDownload = (e) => {
    e.preventDefault()
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Agustin_Fraile-CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <div className='nav_cnt'>
        <div className='nav_cnt-logo'></div>
        <ul>
          <a href="#inicio">
            <li>Inicio</li>
          </a>
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
        <div 
          className='nav_cv' 
          onClick={handleDownload}
          alt="Logo de curriculum" title='Descarga mi CV'
        >
          <img src={ cv } />
        </div>
    </div>
  )
}

export default NavBar