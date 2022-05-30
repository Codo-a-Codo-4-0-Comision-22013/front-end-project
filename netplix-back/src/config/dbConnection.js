import mongoose from 'mongoose';

// Connectar a la base de datos
const conectarDb = async () => {
  try {
    // Conectamos a la base de datos
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log(`Conectado `);
} catch (error) {
    console.log(error);
    // forzamos que el proceso termine
    process.exit(1);
  }
};


export default conectarDb;