import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="body-bg min-h-screen pt-12 md:pt-20 pb-2 px-2"> */}
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/auth' element={<AuthPage/>}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
