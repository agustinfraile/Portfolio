import React from 'react';
import AOS from 'aos';
import Carrusel from '../../components/Carrusel/Carrusel';
import { cards } from '../../data';
import './Projects.css';

const Projects = () => {

  AOS.init();

  return (
    <div className='project-cnt' id='projects'>
        <div className='project-cnt_title'
                  data-aos="fade-up"
                  data-aos-duration='2000'>
            <h3>
                Proyectos en los que trabajé
            </h3>
        </div>
        
        <div 
          className='project-cnt_carrousel' 
          data-aos="fade-down"
          data-aos-duration='2000'
        >
            <Carrusel cards={cards}/>
        </div>
    </div>
  )
}

export default Projects