import { Testimonial } from '../models/Testimonial.js';

const guardarTestimonial = async (req, res) => { // req lo que enviamos : res lo que express nos responde

  const { nombre, correo, mensaje } = req.body;
  const errores = [];

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

    try {
      // Consultamos los viajes en la BD
      const testimoniales = await Testimonial.findAll();

      res.render('../views/testimoniales.pug', {
        pagina: 'Testimoniales',
        errores,
        nombre,
        correo,
        mensaje,
        testimoniales
      })
    } catch (error) {
      console.log(error);
    }
  } else {
    // Almacenar en la BD
    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje
      })

      // Terminar de realizar la accion
      res.redirect('/testimoniales');

    } catch (error) {
      console.log(error);

    }
  }
}

export {
  guardarTestimonial
}