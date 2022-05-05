export const LoginForm = () => {
  return (
    <>
      <h1 className="auth-form-title">Login:</h1>
      <hr />

      <form autoComplete="off" action="">
        <label htmlFor="userEmail">E-mail:</label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="Ingrese su email..."
        />
        
        <label htmlFor="userPassword">Contraseña:</label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          placeholder="Ingrese su contraseña..."
        />
       
        <button>Ingresar</button>
        <hr />
        <span>¿Ya tienes una cuenta?</span> Iniciar sesión
      </form>
    </>
  );
};
