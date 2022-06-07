import express from 'express';
import {
  actualizarUsuario,
  comprobarToken,
  confirmarUsuario,
  crearUsuario,
  eliminarUsuario,
  loginUsuario,
  obtenerUsuarios,
  olvidePassword,
  nuevoPassword,
  perfil,
} from '../controllers/usuarioController.js';
import checkAuth from '../middleware/checkAuth.js';


// Creamos la variable router para poder usar las rutas
const router = express.Router();

router.get('/', obtenerUsuarios);
router.post('/crear', crearUsuario);
router.post('/login', loginUsuario);
router.get('/confirmar/:token', confirmarUsuario);
router.post('/olvide-password', olvidePassword);
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);
router.get('/perfil', checkAuth, perfil);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

export default router;
