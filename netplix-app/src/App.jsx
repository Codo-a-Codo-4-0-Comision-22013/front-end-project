import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthScreen } from './auth/AuthScreen';
import { ConfirmarCuenta } from './auth/pages/ConfirmarCuenta';
import { Login } from './auth/pages/Login';
import { NuevoPassword } from './auth/pages/NuevoPassword';
import { OlvidePassword } from './auth/pages/OlvidePassword';
import { Registrar } from './auth/pages/Registrar';
import { Peliculas } from './dashboard/components/Peliculas';
import { Dashboard } from './dashboard/Dashboard';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthScreen />}>
            <Route index element={<Login />}></Route>
            <Route path="registrar" element={<Registrar />}></Route>
            <Route path="olvide-password" element={<OlvidePassword />}></Route>
            <Route path="olvide-password/:token" element={<NuevoPassword />}></Route>
            <Route path="confirmar/:id" element={<ConfirmarCuenta />}></Route>
        </Route>

        <Route path="/inicio" element={<Dashboard />}> 
        <Route index element={<Peliculas />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
