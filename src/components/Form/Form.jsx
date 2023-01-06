import React, { useState } from 'react';
import './Form.css';


const ContactForm = () => {

  // Estado para el nombre del usuario
  const [name, setName] = useState('');
  // Estado para el correo del usuario
  const [email, setEmail] = useState('');
  // Estado para la descripción del usuario
  const [description, setDescription] = useState('');
  // Estado para los errores del formulario
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    description: '',
  });
  // Estado para controlar si el formulario ha sido enviado o no
  const [submitted, setSubmitted] = useState(false);

  // Función para validar el contenido de un campo del formulario
  const validate = (field, value) => {
    // Valida el campo de nombre
    if (field === 'name') {
      // Si el valor del campo no cumple con la expresión regular, devuelve un mensaje de error
      return !value.match(/^[a-zA-Z\s]+$/) ? 'El nombre solo puede tener letras' : '';
    } 
    
    // Valida el campo de correo
    else if (field === 'email') {
      // Si el valor del campo no cumple con la expresión regular, devuelve un mensaje de error
      return !value.match(/^[^@]+@[^@]+\.[^@]+$/) ? 'Ingresa un correo válido' : '';
    } 
    
    // Valida el campo de descripción
    else if (field === 'description') {
      // Si el valor del campo no cumple con la expresión regular, devuelve un mensaje de error
      return !value.match(/^[a-zA-Z0-9\s,.$?!]+$/) ? 'La descripción solo puede tener letras, números y (!,?,$)' : '';
    }
  };
  

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event) => {
    // Obtiene el nombre y el valor del campo que ha cambiado
    const { name, value } = event.target;

    // Si el campo es el nombre, actualiza el estado del nombre y valida el contenido
    if (name === 'name') {
      setName(value);
      setErrors((prevErrors) => ({ ...prevErrors, name: validate('name', value) }));
    } 
    // Si el campo es el correo, actualiza el estado del correo y valida el contenido
    else if (name === 'email') {
      setEmail(value);
      setErrors((prevErrors) => ({ ...prevErrors, email: validate('email', value) }));
    } 
    // Si el campo es la descripción, actualiza el estado de la descripción y valida el contenido
    else if (name === 'reason') {
      setDescription(value);
      setErrors((prevErrors) => ({ ...prevErrors, description: validate('description', value) }));
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    // Previene la acción por defecto del evento de envío (recargar la página)
    event.preventDefault();

    // Si hay errores en algún campo, termina la función
    if (errors.name || errors.email || errors.description) {
      return;
    }

    // Marca el formulario como enviado
    setSubmitted(true);
    // Limpia los campos del formulario
    setName('');
    setEmail('');
    setDescription('');
  };


  return (
    <div className='form_cnt'>
      {/* Formulario que llama a la función handleSubmit al enviarse */}
      <form onSubmit={handleSubmit}>
        {/* Muestra un mensaje de éxito si el formulario ha sido enviado con éxito */}
        {submitted ? <p>Formulario enviado con éxito</p> : ''}
        <div className='form_cnt--input'>
          {/* Campo de texto para el nombre. Llama a handleChange al cambiar el contenido. Muestra un mensaje de error si hay un error en el campo. */}
          <input
            type="text"
            name="name"
            placeholder='Ingrese su nombre'
            value={name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
  
          {/* Campo de texto para el correo. Llama a handleChange al cambiar el contenido. Muestra un mensaje de error si hay un error en el campo. */}
          <input
            type="text"
            name="email"
            placeholder='Ingrese su correo electronico'
            value={email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
  
        </div>
        
        {/* Campo de texto para la descripción. Llama a handleChange al cambiar el contenido. Muestra un mensaje de error si hay un error en el campo. */}
        <textarea
          name="reason"
          placeholder='Ingresa una breve descripción'
          value={description}
          onChange={handleChange}
        />
        {errors.description && <p>{errors.description}</p>}
  
        {/* Botón para enviar el formulario. Está deshabilitado si hay errores en algún campo o si algún campo está vacío. */}
        <button type="submit" disabled={errors.name || errors.email || errors.description || !name || !email || !description}>Enviar</button>
      </form>
    </div>
  );  

};

export default ContactForm;