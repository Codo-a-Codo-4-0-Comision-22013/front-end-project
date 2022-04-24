import logo from './DATA/logo-gif3.gif';
import './App.css';

function App() {
  return (
    <body>
      <div className="App">
        <div className="App-body">
          <h1>Bienvenido a PronQatar 2022</h1> 
          <img src={logo} className="App-logo" alt="logo" />
          <form className='formulario'>
            <input className='usuario'
            type="mail"
            name="mail"
            placeholder='Ingrese su usuario/email' />
            <input className='contraseña'
            type="password"
            name="contraseña"
            placeholder='Ingrese su contraseña'
              />
            <input className='boton' 
            type="submit" value="Ingresar" />
          </form>
        </div>    
      </div>
    </body>
  );
}

export default App;
