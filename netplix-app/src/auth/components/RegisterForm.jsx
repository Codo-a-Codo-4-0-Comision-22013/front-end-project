export const RegisterForm = () => {
  return (
    <>

      <form
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
            placeholder="Reingrese su contraseña"
            className="w-full mt-1 p-2 shadow-md border-gray-700 rounded-xl bg-zinc-300 hover:bg-zinc-200 transition-colors"
          />
        </div>
        <input
          type="submit"
          value="Registrarse"
          className="bg-red-700 w-full py-2 mt-3 text-white uppercase font-bold shadow-md rounded hover:cursor-pointer hover:bg-red-600 transition-colors"
        />
        <span>¿Ya tienes una cuenta? </span>
        <button className="mt-2 text-sky-700 hover:text-sky-500 transition-colors">
          Inicie sesión
        </button>
      </form>
    </>
  );
};
