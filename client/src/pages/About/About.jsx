import React from 'react';
import AOS from 'aos';
import './About.css';


const About = () => {

  AOS.init()

  return (
    <div className='about-cnt'>

      <div className='about-cnt-first'>

        <div 
          className='about-cnt-text'
          data-aos="fade-right"
          data-aos-duration='2000'
        >
          <h2>Conocimientos</h2>
          <p>
            AQUI VA LOS LOGOS DE LAS TECNOLOGIAS QUE USO
          </p>
        </div>

      </div>

      <div className='about-cnt-sec'>
        
        <div 
          className='about-cnt-text'
          data-aos="fade-left"
          data-aos-duration='2000'
        >
          <h2>FORMACION</h2>
          <p>
            AQUI VA LOS LOGOS DE LOS LUGARES EMPRESAS DONDE APRENDI
          </p>
        </div>

      </div>
      
    </div>
  )
}

export default About