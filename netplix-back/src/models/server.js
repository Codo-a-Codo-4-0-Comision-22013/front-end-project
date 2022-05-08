import express from 'express';
import conectarDb from '../config/dbConnection.js';

export default class Server {
  constructor() {
    // Inicializamos el servidor
    this.app = express();
    // Inicializamos el puerto
    this.port = process.env.PORT ;
    // Inicializamos la conexion a la base de datos
    this.databaseConnect();
    // Inicializamos las rutas
    this.routes();
  }

  async databaseConnect(){
    // Conectamos a la base de datos
    await conectarDb();
  }
  routes() {
    // Importamos las rutas
    this.app.use(express.static('public'));
  }

  listen() {
    // Escuchamos el puerto
    this.app.listen(this.port , () => {
      console.log(`Server on port ${this.port }`);
    });
  }
}
