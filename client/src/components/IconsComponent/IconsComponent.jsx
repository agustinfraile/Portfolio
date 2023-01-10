import React from 'react';
import IconCircle from '../IconCircle/IconCircle';
import github from '../../assets/images/icons/github-logo.png';
import linkedin from '../../assets/images/icons/linkedin-logo.png';
import './IconsComponent.css';


const IconsComponent = () => {
  return (
    <div className='icons_cnt'>
      {/* <span className='icons_cnt-icon'></span>
      <span className='icons_cnt-icon'></span>
      <span className='icons_cnt-icon'></span> */}
      <IconCircle 
        image={github} 
        link='https://github.com/agustinfraile'
      />
      <IconCircle 
        image={linkedin} 
        link='https://www.linkedin.com/in/agustinfraile/'
      />
      {/* <IconCircle /> */}
    </div>
  )
}

export default IconsComponent