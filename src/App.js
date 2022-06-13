import logo from './logo.svg';
import './App.css';
import Router from './routes';
import ThemeProvider from './components/navbar/themeProvider';
import Contact from './components/contact/contact';

function App() {

  return (
      <ThemeProvider >
        <div className="App">
          <Router  />
          <span>Hola Esto es otro componente</span>
        </div>
        <Contact></Contact>
      </ThemeProvider>
  );
}

export default App;
