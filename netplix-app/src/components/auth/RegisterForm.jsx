export const RegisterForm = () => {
  return (
    <>
      <h1>Formulario de registro:</h1>
      <form action="">
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Apellido</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Confirmar la dirección de email</label>
        <input type="text" />
        <label htmlFor="">Elige una contraseña(de 4 a 10 caracteres)</label>
        <input type="text" />
        <label htmlFor="">Confirma la contraseña</label>
        <input type="text" />
        <button>Registrarse</button>
        <input type="checkbox" name="" id="" />

        <span>¿Ya tienes una cuenta?</span> <small>Inicie sesión</small>
      </form>
    </>
  );
};
