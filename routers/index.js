import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { // req lo que enviamos : res lo que express nos responde
  res.send('Inicio')
});

router.get('/nosotros', (req, res) => { // req lo que enviamos : res lo que express nos responde
  res.send('nosotros')
});

router.get('/testimoniales', (req, res) => { // req lo que enviamos : res lo que express nos responde
  res.send('testimoniales')
});

export default router;