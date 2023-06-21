import express from 'express';
import { paginaNosotros } from '../controllers/paginasController.js'

const router = express.Router();

router.get('/', (req, res) => { // req lo que enviamos : res lo que express nos responde
  res.send('Inicio')
});

router.get('/nosotros', paginaNosotros);


export default router;