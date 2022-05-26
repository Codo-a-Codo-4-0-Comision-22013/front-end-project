import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
              <Route index element={<HomePage/>}/>
          </Route>
          <Route path='/auth' element={<AuthPage/>}/>
        </Routes>
    </BrowserRouter>    
  );
}

export default App;
