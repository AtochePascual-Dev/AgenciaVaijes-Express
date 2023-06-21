import express from 'express';
import router from './routers/index.js';
import db from './config/db.js';

// Instanciamos expres
const app = express();

// Conectar la BD
db.authenticate()
  .then(() => console.log('Bade de datos conectada'))
  .catch(error => console.log(error))

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitando pug
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();

  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = 'Agencia de viajes'
  next();
});

// Definir la carpert publica
app.use(express.static('public'));

// Agregar router
app.use('/', router);

// Levantamos un servidor con express
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
})