import express from 'express';
import conectarDb from '../config/dbConnection.js';
import usuarioRoutes from '../routes/usuarioRoutes.js';

export default class Server {
  constructor() {
    // Inicializamos el servidor
    this.app = express();
    // Inicializamos el puerto
    this.port = process.env.PORT;

    // Path de api usuarios
    this.usuariosPath = '/api/usuarios';

    // Inicializamos la conexion a la base de datos
    this.databaseConnect();
    // Inicializamos los middlewares
    this.middlewares();
    // Inicializamos las rutas
    this.routes();
  }

  middlewares() {
    // Directorio publico
    this.app.use(express.static('public'));
    this.app.use(express.json());
  }

  async databaseConnect() {
    // Conectamos a la base de datos
    await conectarDb();
  }
  routes() {
    // Rutas de usuarios
    this.app.use(this.usuariosPath, usuarioRoutes);
  }

  listen() {
    // Escuchamos el puerto
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    });
  }
}
