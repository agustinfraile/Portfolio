import React from 'react';
import AOS from 'aos';
import './About.css';
import IconTech from '../../components/IconTech/IconTech';
import IconEducation from '../../components/IconEducation/IconEducation';


const About = () => {

  AOS.init()

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
            <IconTech />
            <IconTech />
            <IconTech />
            <IconTech />
            <IconTech />
            <IconTech />
          </div>
        </div>

      </div>

      <div className='about-cnt-sec'>
        
        <div 
          className='about-cnt-text'
          data-aos="fade-left"
          data-aos-duration='2000'
        >
          <h2>FORMACION</h2>
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