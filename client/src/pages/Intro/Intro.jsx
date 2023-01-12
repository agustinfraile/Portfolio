import React from 'react';
import profilePicture from '../../assets/images/image-profile.png';
import AOS from 'aos';

import './Intro.css';

const Intro = () => {
  AOS.init()
  return (
    <div className='intro_cnt' id='inicio'>
        <div className='first_cnt'>

            <div 
                className='first_cnt-img'                  data-aos="fade-right"
                data-aos-duration='2000'
            >

               <div className='first_cnt-img--inside' >
                    <img src={profilePicture} alt="Imagen de perfil" />
               </div>

            </div>

            {/* <div className='first_cnt-box'></div> */}

        </div>
        <div className='sec_cnt'>
            <div 
                className='sec_cnt-text'
                data-aos="fade-down"
                data-aos-duration='2000'
            >
                <h1>Hola! soy Agustin</h1>
                <p>
                Soy un desarrollador con experiencia en dar vida a proyectos digitales. Me apasiona el mundo del desarrollo web. Si estas buscando un desarrollador con ganas de trabajar en proyectos interesantes, no dudes en contactarme!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Intro