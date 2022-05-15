import express from 'express';
import {
  actualizarUsuario,
  crearUsuario,
  eliminarUsuario,
  obtenerUsuarios,
} from '../controllers/usuarioController.js';

// Creamos la variable router para poder usar las rutas
const router = express.Router();

router.get('/', obtenerUsuarios);
router.post('/crear', crearUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

export default router;
