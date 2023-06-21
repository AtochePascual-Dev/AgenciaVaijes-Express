import express from 'express';
import router from './routers/index.js';

// Instanciamos expres
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitando pug
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();

  res.locals.actualYear = year.getFullYear();
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