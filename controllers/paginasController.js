import { Viaje } from '../models/Viaje.js';

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

export {
  paginaNosotros,
  paginaViajes,
}