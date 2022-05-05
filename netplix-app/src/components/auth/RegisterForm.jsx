export const RegisterForm = () => {
  return (
    <>
      <h1 className="auth-form-title">Formulario de Registro:</h1>
      <hr />

      <form className="auth-form" autoComplete="off" action="">
        <label htmlFor="name">Nombre/s:</label>
        <input
          className="auth-input"
          type="text"
          name="name"
          id="name"
          placeholder="Ingrese su/s nombre/s..."
        />
        <label htmlFor="lastName">Apellido/s:</label>
        <input
          className="auth-input"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Ingrese su/s apellido/s..."
        />
        <label htmlFor="userName">Nombre de Usuario:</label>
        <input
          className="auth-input"
          type="text"
          name="userName"
          id="userName"
          placeholder="Ingrese su nombre de usuario..."
        />
        <label htmlFor="userEmail">E-mail:</label>
        <input
          className="auth-input"
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="Ingrese su email..."
        />
        <label htmlFor="confirmEmail">Confirme su e-mail:</label>
        <input
          className="auth-input"
          type="email"
          name="confirmEmail"
          id="confirmEmail"
          placeholder="Confirme su email..."
        />
        <label htmlFor="userPassword">Contraseña:</label>
        <input
          className="auth-input"
          type="password"
          name="userPassword"
          id="userPassword"
          placeholder="Ingrese su contraseña..."
        />
        <label htmlFor="confirmPassword">Confirme su contraseña:</label>
        <input
          className="auth-input"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirme su contraseña..."
        />
        <button>Registrarse</button>
        <hr />
        <small>¿Ya tienes una cuenta?</small> Iniciar sesión
      </form>
    </>
  );
};
