import React from 'react';
import CardProject from '../../components/CardProject/CardProject';
import './Projects.css';

const Projects = () => {
  return (
    <div className='project-cnt'>
        <div className='project-cnt_title'>
            <h3>
                Proyectos en los que trabajé
            </h3>
        </div>
        <div className='project-cnt_carrousel'>
            <CardProject />
        </div>
    </div>
  )
}

export default Projects