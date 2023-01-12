import React from 'react';
import './IconTech.css';

const IconTech = ({img}) => {
  return (
    <div className='tech-cnt'>
        <img src={ img } alt={`Imagen de ${img}`} 
        title={`Imagen de ${img}`}/>
        
    </div>
  )
}

export default IconTech