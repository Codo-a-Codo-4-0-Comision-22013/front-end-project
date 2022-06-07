import { NuevoPasswordForm } from "../components/NuevoPasswordForm";

export const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-zinc-800 font-black text-3xl capitalize">
        Restablece tu contraseña
      </h1>
      <NuevoPasswordForm />
    </>
  );
};
