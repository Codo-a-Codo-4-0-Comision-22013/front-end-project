import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile.js';
import Login from './components/login/login.js';

function App() {
  return (
    
    <div className="App">
      <Login></Login>
      <span>Hola Esto es otro componente</span>
      <Profile user={
          {
            name: 'Juan',
            username: 'juanito',
            email: 'adad@gmail.com',
            photo: 'https://picsum.photos/200/300',
        }} />
    </div>
  );
}

export default App;
