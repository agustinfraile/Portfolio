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