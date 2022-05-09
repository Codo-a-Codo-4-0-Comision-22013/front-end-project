export const LoginForm = () => {
  return (
    <>
      <h1 className="text-neutral-200 font-black text-3xl capitalize">
        Inicia sesión
      </h1>
      <form
        autoComplete="off"
        className="text-neutral-200 my-4 bg-gray-700 shadow rounded-lg p-5"
      >
        <div className="my-1">
          <label className="block text-xl font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese el email"
            className="w-full mt-1 p-2 shadow-lg border-gray-700 rounded-xl bg-gray-900"
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
            className="w-full mt-1 p-2 shadow-lg border-gray-700 rounded-xl bg-gray-900"
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-red-600 w-full py-2 mt-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-red-700"
        />
        <small>¿Necesitas ayuda?</small>
        <span>¿Primera vez en Netplix?</span> <small>Suscríbete ahora</small>
      </form>
    </>
  );
};
