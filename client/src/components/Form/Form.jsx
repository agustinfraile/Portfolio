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
  // Este estado nos permite saber si el botón de envío del formulario está deshabilitado o no. 
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);



  // Función para validar el contenido de un campo del formulario
  const validate = (field, value) => {
    // Si el valor del campo es falso, es decir, si el campo está vacío
    if (!value) {
    // Regresamos un mensaje de error indicando que el campo es obligatorio
    return 'Este campo es obligatorio';
    }
    // Si el nombre del campo es "name"
    if (field === 'name') {
    // Regresamos un mensaje de error si el valor no cumple con el patrón de solo letras y espacios, de lo contrario, regresamos una cadena vacía
    return !value.match(/^[a-zA-Z\s]+$/) ? 'El nombre solo puede tener letras' : '';
    }
    // Si el nombre del campo es "email"
    else if (field === 'email') {
    // Regresamos un mensaje de error si el valor no cumple con el patrón de un correo válido, de lo contrario, regresamos una cadena vacía
    return !value.match(/^[^@]+@[^@]+.[^@]+$/) ? 'Ingresa un correo válido' : '';
    }
    // Si el nombre del campo es "description"
    else if (field === 'description') {
    // Regresamos un mensaje de error si el valor no cumple con el patrón de solo letras, números y espacios, de lo contrario, regresamos una cadena vacía
    return !value.match(/^[a-zA-Z0-9\s]+$/) ? 'La descripción solo puede tener letras y números' : '';
    }
  };
  

  // Esta función verifica si el botón debe estar deshabilitado o no, dependiendo de si hay errores en los campos del formulario o si estos campos están vacíos. Si alguno de estos casos se cumple, la función devuelve "true" y el botón se deshabilita. En caso contrario, devuelve "false" y el botón está habilitado.
  const shouldButtonBeDisabled = () => {
    return errors.name || errors.email || errors.description || !name || !email || !description;
  };
  

  // Esta función es la encargada de manejar el cambio de los inputs del formulario
  const handleChange = (event) => {
    // Extraemos el nombre y el valor del input que está siendo modificado
    const { name, value } = event.target;

    // Dependiendo del nombre del input, actualizamos el estado correspondiente
    // y validamos el valor ingresado
    if (name === 'name') {
      setName(value);
      // Actualizamos el error del nombre y lo guardamos en el estado errors
      setErrors((prevErrors) => ({ ...prevErrors, name: validate('name', value) }));
    } else if (name === 'email') {
      setEmail(value);
      // Actualizamos el error del correo y lo guardamos en el estado errors
      setErrors((prevErrors) => ({ ...prevErrors, email: validate('email', value) }));
    } else if (name === 'reason') {
      setDescription(value);
      // Actualizamos el error de la descripción y lo guardamos en el estado errors
      setErrors((prevErrors) => ({ ...prevErrors, description: validate('description', value) }));
    }
    // Actualizamos el estado de isButtonDisabled según la función shouldButtonBeDisabled
    setIsButtonDisabled(shouldButtonBeDisabled());
  };

  

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    // Previene la acción por defecto del evento de envío (recargar la página)
    event.preventDefault();

    // Si hay errores en algún campo, termina la función
    if (errors.name || errors.email || errors.description || !name || !email || !description) {
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
  
        {/* El botón "Enviar" está desactivado si el estado "isButtonDisabled" es verdadero. */}
        <button 
          type="submit" 
          disabled={isButtonDisabled}
        >
          Enviar
        </button>
        
      </form>
    </div>
  );  

};

export default ContactForm;