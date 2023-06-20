import express from 'express';

// Instanciamos expres
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Levantamos un servidor con express
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
})