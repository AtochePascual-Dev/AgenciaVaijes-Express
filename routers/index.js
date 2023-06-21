import express from 'express';
import { paginaNosotros, paginaViajes } from '../controllers/paginasController.js'

const router = express.Router();

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);


export default router;