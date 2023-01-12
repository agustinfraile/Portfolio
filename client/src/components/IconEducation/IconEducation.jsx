import React from 'react';
import './IconEducation.css';

const IconEducation = ({img}) => {
  return (
    <div className='education-cnt'>
        <img 
          src={ img } 
          alt={`Imagen de ${img}`} 
          title={`Imagen de ${img}`}
        />
    </div>
  )
}

export default IconEducation