import express from 'express';
import router from './routers/index.js';

// Instanciamos expres
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitando pug
app.set('view engine', 'pug');

// Agregar router
app.use('/', router);

// Levantamos un servidor con express
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
})