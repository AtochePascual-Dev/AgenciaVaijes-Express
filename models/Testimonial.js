import Sequelize from 'sequelize';
import db from '../config/db.js'

// Creamos el modelo de Viaje para hacer consultas a la tabla de viajes
export const Testimonial = db.define('testimoniales', {
  nombre: {
    type: Sequelize.STRING
  },
  correo: {
    type: Sequelize.STRING
  },
  mensaje: {
    type: Sequelize.STRING
  },
});