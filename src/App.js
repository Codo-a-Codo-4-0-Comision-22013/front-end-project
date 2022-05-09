import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile.js';
import Navbar from './components/navbar/navbar';
import Router from './routes';

function App() {
  return (
    
    <div className="App">
      <Router />
      <span>Hola Esto es otro componente</span>
    </div>
  );
}

export default App;
