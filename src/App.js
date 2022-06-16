import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import Layout from './containers/Layout/Layout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Signup from './components/signup/Signup';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={<AuthPage/>}/>
          <Route path='/signup' element={<Signup/>}/>

          <Route element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/profile' element={<ProfilePage/>}/>
          </Route>
        </Routes>
    </BrowserRouter>    
  );
}

export default App;
