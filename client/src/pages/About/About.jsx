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
          <h2>Titulo</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

      </div>

      <div className='about-cnt-sec'>
        
        <div 
          className='about-cnt-text'
          data-aos="fade-left"
          data-aos-duration='2000'
        >
          <h2>Titulo</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

      </div>
      
    </div>
  )
}

export default About