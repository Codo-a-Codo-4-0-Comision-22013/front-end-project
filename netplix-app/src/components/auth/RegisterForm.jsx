export const RegisterForm = () => {
  return (
    <>
      <h1 className="auth-form-title">Formulario de Registro:</h1>
      <hr />

      <form autoComplete="off" action="">
        <label htmlFor="name">Nombre/s:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ingrese su/s nombre/s..."
        />
        <label htmlFor="lastName">Apellido/s:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Ingrese su/s apellido/s..."
        />
        <label htmlFor="userName">Nombre de Usuario:</label>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Ingrese su nombre de usuario..."
        />
        <label htmlFor="userEmail">E-mail:</label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="Ingrese su email..."
        />
        <label htmlFor="confirmEmail">Confirme su e-mail:</label>
        <input
          type="email"
          name="confirmEmail"
          id="confirmEmail"
          placeholder="Confirme su email..."
        />
        <label htmlFor="userPassword">Contraseña:</label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          placeholder="Ingrese su contraseña..."
        />
        <label htmlFor="confirmPassword">Confirme su contraseña:</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirme su contraseña..."
        />
        <button>Registrarse</button>
        <hr />
        <span>¿Ya tienes una cuenta?</span> Iniciar sesión
      </form>
    </>
  );
};
