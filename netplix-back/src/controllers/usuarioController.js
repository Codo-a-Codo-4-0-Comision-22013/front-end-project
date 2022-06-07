import Usuario from '../models/Usuario.js';
import response from 'express';
import generarId from '../helpers/generarId.js';
import generarJWT from '../helpers/generarJWT.js';

// Controlador de obtener un usuario
const obtenerUsuarios = async (req, res = response) => {
  res.json({
    ok: true,
  });
};

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    const error = new Error('El usuario no existe');
    return res.status(404).json({ msg: error.message });
  }

  // if (!usuario.confirmado) {
  //   const error = new Error('Tu cuenta no ha sido confirmada');
  //   return res.status(403).json({ msg: error.message });
  // }

  if (await usuario.comprobarPassword(password)) {
    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      token: generarJWT(usuario._id),
    });
  } else {
    const error = new Error('El password es incorrecto');
    return res.status(403).json({ msg: error.message });
  }
};

const confirmarUsuario = async (req, res = response) => {
  const { token } = req.params;
  const usuario = await Usuario.findOne({ token });

  if (!usuario) {
    const error = new Error('Token no valido');
    return res.status(403).json({ msg: error.message });
  }

  try {
    usuario.confirmado = true;
    usuario.token = '';
    await usuario.save();
    res.json({ msg: 'Usuario confirmado' });
  } catch (error) {
    console.log(error);
  }
};

const crearUsuario = async (req, res = response) => {
  const { email } = req.body;
  const existeUsuario = await Usuario.findOne({ email });

  if (existeUsuario) {
    const error = new Error('Usuario ya registrado');
    res.status(400).json({ msg: error.message });
  }

  try {
    const data = req.body;
    const usuario = new Usuario(data);
    usuario.token = generarId();

    const usuarioAlmacenado = await usuario.save();

    res.json(usuarioAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const olvidePassword = async (req, res) => {
  const { email } = req.body;

  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    const error = new Error('El usuario no existe');
    return res.status(404).json({ msg: error.message });
  }

  try {
    usuario.token = generarId();
    await usuario.save();
    res.json({ msg: 'Hemos enviado un main con las instrucciones' });
  } catch (error) {
    console.log(error);
  }
};

const comprobarToken = async (req, res) => {
  const { token } = req.params;

  const usuario = await Usuario.findOne({ token });

  if (!usuario) {
    const error = new Error('Token no valido');
    return res.status(403).json({ msg: error.message });
  }

  try {
    res.json({ msg: 'Token valido y el Uusario existe' });
  } catch (error) {
    console.log(error);
  }
};

const nuevoPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  const usuario = await Usuario.findOne({ token });

  if (!usuario) {
    const error = new Error('Token no valido');
    return res.status(403).json({ msg: error.message });
  }

  try {
    usuario.password = password;
    usuario.token = '';
    await usuario.save();

    res.json({ msg: 'Password modificado correctamente' });
  } catch (error) {
    console.log(error);
  }
};

const perfil = async (req, res) => {
  const { usuario } = req;

  res.json(usuario);
};

const actualizarUsuario = async (req, res) => {
  res.json({
    ok: true,
  });
};

const eliminarUsuario = async (req, res) => {
  res.json({
    ok: true,
  });
};

export {
  obtenerUsuarios,
  loginUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
  confirmarUsuario,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
};
