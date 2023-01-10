import React from 'react';
import IconCircle from '../IconCircle/IconCircle';
import './IconsComponent.css';

const IconsComponent = () => {
  return (
    <div className='icons_cnt'>
      {/* <span className='icons_cnt-icon'></span>
      <span className='icons_cnt-icon'></span>
      <span className='icons_cnt-icon'></span> */}
      <IconCircle />
      <IconCircle />
      <IconCircle />
    </div>
  )
}

export default IconsComponent