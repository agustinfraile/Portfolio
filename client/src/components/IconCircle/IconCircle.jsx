import React from 'react';
import './IconCircle.css';

const IconCircle = ({image}) => {
  return (
    <div className='icons_cnt-icon'>
      <img src={image} alt={`Imagen de ${image}`} />
    </div>
  )
}

export default IconCircle