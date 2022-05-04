export const RegisterForm = () => {
  return (
    <>
      <h1>Formulario de Registro:</h1>
      <hr />
      <form action="">
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

        <label htmlFor="confirmEmail">Reingrese su e-mail:</label>
        <input
          type="email"
          name="confirmEmail"
          id="confirmEmail"
          placeholder="Reingrese su email..."
        />

        <label htmlFor="userPassword">Contraseña:</label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          placeholder="Ingrese su contraseña..."
        />

        <label htmlFor="confirmPassword">Reingrese su contraseña:</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Reingrese su contraseña..."
        />
      </form>
    </>
  );
};
