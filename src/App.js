import './App.css';
import Profile from './components/Profile/Profile.jsx';
import Login from './components/Login/Login.jsx';
import Appbar from './components/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CarouselItem from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path="" element={<CarouselItem/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
