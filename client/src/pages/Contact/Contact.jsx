import React from 'react';
import AOS from 'aos';

import IconCircle from '../../components/IconCircle/IconCircle';
import IconsComponent from '../../components/IconsComponent/IconsComponent';
import email  from '../../assets/images/icons/email.png'
import './Contact.css';

const Contact = () => {

    AOS.init();

  return (
    <div className='contact-cnt' id='contact'>

        <div className='contact_cnt-icons'>

            <div className='contact_cnt-title'>
                <h2>Podes encontrarme en</h2>
            </div>
            
            <IconsComponent />

        </div>

        <div className='contact_cnt-form'>

            <div className='contact_cnt-form-subtitle'>
                <h3>
                    Tambien podes contactarme dejandome un correo
                </h3>
            </div>

            <div 
                className='contact_cnt-form-icon'
                data-aos="fade-down"
                data-aos-duration='2000'
            >
                <div>
                    <IconCircle 
                        image={email} 
                        link={'agustinfrailedev@gmail.com'}
                    />
                </div>
            </div>            
        </div>

    </div>
  )
}

export default Contact