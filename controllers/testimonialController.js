const guardarTestimonial = async (req, res) => { // req lo que enviamos : res lo que express nos responde

  const { nombre, correo, mensaje } = req.body;
  const errores = [];

  try {

    if (nombre.trim() === '') {
      errores.push({ mensaje: `El Nombre esta vacio ` })
    }

    if (correo.trim() === '') {
      errores.push({ mensaje: `El Correo esta vacio ` })
    }

    if (mensaje.trim() === '') {
      errores.push({ mensaje: `El Mensaje esta vacio ` })
    }

    // Sí, existen errores
    if (errores.length > 0) {
      res.render('../views/testimoniales.pug', {
        pagina: 'Testimoniales',
        errores,
        nombre,
        correo,
        mensaje
      })
    }


  } catch (error) {
    console.log(error);
  }
}

export {
  guardarTestimonial
}