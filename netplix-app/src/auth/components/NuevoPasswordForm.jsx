export const NuevoPasswordForm = () => {
  return (
    <>
      <form
        autoComplete="off"
        className="text-slate-900 my-4 bg-gray-100 shadow rounded-lg p-5"
      >
        
        <div className="my-1">
          <label className="block text-xl font-bold" htmlFor="password">
            Nueva contraseña
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
            Confirmar la nueva contraseña
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
          value="Guardar nueva contraseña"
          className="bg-red-700 w-full py-2 mt-3 text-white uppercase font-bold shadow-md rounded hover:cursor-pointer hover:bg-red-600 transition-colors"
        />
      </form>

    </>
  );
};
