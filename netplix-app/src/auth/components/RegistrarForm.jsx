import { useState } from 'react';
import { Link } from 'react-router-dom';

export const RegistrarForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombre, apellido, email, confirmarEmail, password, confirmarPassword].includes('')){
      console.log('Todos los campos son obligatorios');
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="text-slate-900 my-4 bg-gray-100 shadow rounded-lg p-5"
      >
        <div className="my-1">
          <label className="block text-xl font-bold" htmlFor="nombre">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese el nombre"
            className="w-full mt-1 p-2 shadow-md border-gray-700 rounded-xl bg-zinc-300 hover:bg-zinc-200 transition-colors"
          />
        </div>
        <div className="my-1">
          <label className="block text-xl font-bold" htmlFor="apellido">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Ingrese el apellido"
            className="w-full mt-1 p-2 shadow-md border-gray-700 rounded-xl bg-zinc-300 hover:bg-zinc-200 transition-colors"
          />
        </div>
        <div className="my-1">
          <label className="block text-xl font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Ingrese el email"
            className="w-full mt-1 p-2 shadow-md border-gray-700 rounded-xl bg-zinc-300 hover:bg-zinc-200 transition-colors"
          />
        </div>
        <div className="my-1">
          <label className="block text-xl font-bold" htmlFor="confirmEmail">
            Confirmar la dirección de email
          </label>
          <input
            type="email"
            id="confirmEmail"
            value={confirmarEmail}
            onChange={(e) => setConfirmarEmail(e.target.value)}
            placeholder="Reingrese el email"
            className="w-full mt-1 p-2 shadow-md border-gray-700 rounded-xl bg-zinc-300 hover:bg-zinc-200 transition-colors"
          />
        </div>
        <div className="my-1">
          <label className="block text-xl font-bold" htmlFor="password">
            Elige una contraseña(de 4 a 10 caracteres)
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            className="w-full mt-1 p-2 shadow-md border-gray-700 rounded-xl bg-zinc-300 hover:bg-zinc-200 transition-colors"
          />
        </div>
        <div className="my-1">
          <label className="block text-xl font-bold" htmlFor="confirmPassword">
            Confirma la contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
            placeholder="Reingrese su contraseña"
            className="w-full mt-1 p-2 shadow-md border-gray-700 rounded-xl bg-zinc-300 hover:bg-zinc-200 transition-colors"
          />
        </div>
        
        <input
          type="submit"
          value="Registrarse"
          className="bg-red-700 w-full py-2 mt-3 text-white uppercase font-bold shadow-md rounded hover:cursor-pointer hover:bg-red-600 transition-colors"
        />
      </form>
      <span>¿Ya tienes una cuenta? </span>
      <Link
        to=""
        className="mt-2 text-sky-700 hover:text-sky-500 transition-colors"
      >
        Inicie sesión
      </Link>
    </>
  );
};
