import Server from "./src/models/server.js";
import dotenv from "dotenv";

// Inicializamos el archivo de configuracion
dotenv.config();

// Inicializamos el servidor
const server = new Server();
server.listen();
