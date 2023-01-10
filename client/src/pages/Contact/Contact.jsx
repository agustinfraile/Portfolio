import React from 'react';
import IconCircle from '../../components/IconCircle/IconCircle';
import IconsComponent from '../../components/IconsComponent/IconsComponent';
import email  from '../../assets/images/icons/email.png'
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-cnt'>

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

            <div className='contact_cnt-form-icon'>
                <IconCircle 
                    image={email} 
                    link={'agustinfrailedev@gmail.com'}
                />
            </div>            
        </div>

    </div>
  )
}

export default Contact