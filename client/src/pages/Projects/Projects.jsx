import React from 'react';
import Carrusel from '../../components/Carrusel/Carrusel';
import { cards } from '../../data';
import './Projects.css';

const Projects = () => {
  return (
    <div className='project-cnt' id='projects'>
        <div className='project-cnt_title'>
            <h3>
                Proyectos en los que trabajé
            </h3>
        </div>
        
        <div className='project-cnt_carrousel'>
            <Carrusel cards={cards}/>
        </div>
    </div>
  )
}

export default Projects