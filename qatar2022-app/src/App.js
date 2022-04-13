import logo from './DATA/logo-gif3.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <body>
        <p>Agregar inputs de texto y botones para agregar nuevos usuarios</p>
          <form>
           <label>
            Usuario: <input type="mail" name="mail" />
          </label>
            <input type="submit" value="Ingresar" />
          </form>
        </body>
      </header>
    </div>
  );
}

export default App;
