import express from 'express';
import { paginaNosotros, paginaViajes, paginaDetalleViaje } from '../controllers/paginasController.js'

const router = express.Router();

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);


export default router;