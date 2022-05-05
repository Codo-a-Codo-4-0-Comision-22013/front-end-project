export const LoginForm = () => {
  return (
    <>
      <h1 className="auth-form-title">Login:</h1>
      <hr />

      <form className="auth-form" autoComplete="off" action="">
        <label htmlFor="userEmail">E-mail:</label>
        <input
          className="auth-input"
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="Ingrese su email..."
        />
        <label htmlFor="userPassword">Contraseña:</label>
        <input
          className="auth-input"
          type="password"
          name="userPassword"
          id="userPassword"
          placeholder="Ingrese su contraseña..."
        />
        <button>Ingresar</button>
        <hr />
        <small>¿Ya tienes una cuenta?</small> Iniciar sesión
      </form>
    </>
  );
};
