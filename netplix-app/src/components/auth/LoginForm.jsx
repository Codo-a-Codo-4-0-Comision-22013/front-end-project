export const LoginForm = () => {
  return (
    <>
      <h1 className="text-zinc-800 font-black text-3xl capitalize">
        Inicia sesión
      </h1>
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
        <div className="my-1">
          <label className="block text-xl font-bold" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Ingrese su contraseña"
            className="w-full mt-1 p-2 shadow-md border-gray-700 rounded-xl bg-zinc-300 hover:bg-zinc-200 transition-colors"
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-red-700 w-full py-2 mt-3 text-white uppercase font-bold shadow-md rounded hover:cursor-pointer hover:bg-red-600 transition-colors"
        />
        <button className="block mt-2 hover:text-gray-600 transition-colors">¿Necesitas ayuda?</button>
        <span >¿Primera vez en Netplix? </span> 
        <button className="text-sky-700 hover:text-sky-500 transition-colors">Suscríbete ahora</button>
      </form>
    </>
  );
};
