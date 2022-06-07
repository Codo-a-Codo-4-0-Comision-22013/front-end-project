import React from "react";
import { Link } from "react-router-dom";

export const OlvidePasswordForm = () => {
  return (
    <>
      <form
        autoComplete="off"
        className="text-slate-900 my-4 bg-gray-100 shadow rounded-lg p-5"
      >
        <div className="my-1">
          <label className="block text-xl font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese el email"
            className="w-full mt-1 p-2 shadow-md border-gray-700 rounded-xl bg-zinc-300 hover:bg-zinc-200 transition-colors"
          />
        </div>

        <input
          type="submit"
          value="Enviar instrucciones"
          className="bg-red-700 w-full py-2 mt-3 text-white uppercase font-bold shadow-md rounded hover:cursor-pointer hover:bg-red-600 transition-colors"
        />
      </form>
      <nav>
        <div>
          <span>¿Ya tienes una cuenta? </span>
          <Link
            to="../login"
            className="text-sky-700 hover:text-sky-500 transition-colors "
          >
            Inicia sesión
          </Link>
        </div>
        <div>
          <span>¿Primera vez en Netplix? </span>
          <Link
            to="../registro"
            className="text-sky-700 hover:text-sky-500 transition-colors"
          >
            Suscríbete ahora
          </Link>
        </div>
      </nav>
    </>
  );
};
