import React from 'react';
import AOS from 'aos';
import IconTech from '../../components/IconTech/IconTech';
import IconEducation from '../../components/IconEducation/IconEducation';
import htmlLogo from '../../assets/images/icons/tech-logos/html.png'
import cssLogo from '../../assets/images/icons/tech-logos/css.png';
import jsLogo from '../../assets/images/icons/tech-logos/js.png'
import nodeLogo from '../../assets/images/icons/tech-logos/node.png'
import expressLogo from '../../assets/images/icons/tech-logos/express.png'
import sqlLogo from '../../assets/images/icons/tech-logos/sql.png'

import './About.css';

const About = () => {

  AOS.init();

  return (
    <div className='about-cnt'  id='sobre-mi'>

      <div className='about-cnt-first'>

        <div 
          className='about-cnt-text'
          data-aos="fade-right"
          data-aos-duration='2000'
        >
          <h2>Conocimientos</h2>
          
          <div className='about-cnt-tech'>
            <IconTech img={ htmlLogo } />
            <IconTech img={ cssLogo } />
            <IconTech img={ jsLogo } />
            <IconTech img={ nodeLogo } />
            <IconTech img={ expressLogo } />
            <IconTech img={ sqlLogo } />
          </div>
        </div>

      </div>

      <div className='about-cnt-sec'>
        
        <div 
          className='about-cnt-text'
          data-aos="fade-left"
          data-aos-duration='2000'
        >
          <h2>Formacion</h2>
          <div className='about-cnt-education'>
            <IconEducation />
            <IconEducation />
            <IconEducation />
            <IconEducation />
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default About