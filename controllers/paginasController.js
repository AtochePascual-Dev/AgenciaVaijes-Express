import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimonial.js';

const paginaInicio = async (req, res) => { // req lo que enviamos : res lo que express nos responde

  const consultasDB = [Viaje.findAll({ limit: 3 }), Testimonial.findAll({ limit: 3 })];

  try {
    // Cosnsultar 3 viajes del modelo viaje y 3 testimoniales del modelo Testimonial
    const respuesta = await Promise.all(consultasDB);

    res.render('../views/inicio.pug', {
      pagina: 'Inicio',
      clase: 'home',
      viajes: respuesta[0],
      testimoniales: respuesta[1]
    })

  } catch (error) {
    console.log(error);
  }

}

const paginaNosotros = (req, res) => { // req lo que enviamos : res lo que express nos responde
  res.render('../views/nosotros.pug', {
    pagina: 'Nosotros'
  })
}

const paginaViajes = async (req, res) => { // req lo que enviamos : res lo que express nos responde

  // Consultamos los viajes en la BD
  try {
    const viajes = await Viaje.findAll()

    res.render('../views/viajes.pug', {
      pagina: 'Próximos Viajes',
      viajes
    })
  } catch (error) {
    console.log(error);
  }
}

const paginaDetalleViaje = async (req, res) => { // req lo que enviamos : res lo que express nos responde

  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({ where: { slug } });

    res.render('../views/viaje.pug', {
      pagina: 'Información Viaje',
      viaje
    })
  } catch (error) {
    console.log(error);
  }

}

const paginaTestimoniales = async (req, res) => { // req lo que enviamos : res lo que express nos responde

  try {
    // Consultamos los viajes en la BD
    const testimoniales = await Testimonial.findAll();

    res.render('../views/testimoniales.pug', {
      pagina: 'Testimoniales',
      testimoniales
    })
  } catch (error) {
    console.log(error);
  }
}

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaDetalleViaje,
  paginaTestimoniales
}