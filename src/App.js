import './App.css';
import Profile from './components/Profile/Profile.jsx';
import Login from './components/Login/Login.jsx';
import Appbar from './components/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path="/" element={<MainContent/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
