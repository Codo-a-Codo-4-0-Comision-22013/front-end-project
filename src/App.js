import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//container con nav y footer
import Layout from './containers/Layout/Layout';

//pages
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Signup from './components/signup/Signup';

//context
import GeneralState from './context/GeneralState';

function App() {
  return (
		<GeneralState>
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
		</GeneralState>
  );
}

export default App;
