import { Route, Routes } from "react-router-dom";
import { NavBar } from "../dashboard/components/NavBar";
import { BuscadorScreen } from "../dashboard/pages/BuscadorScreen";
import { MiListaScreen } from "../dashboard/pages/MiListaScreen";
import { NetplixScreen } from "../dashboard/pages/NetplixScreen";
import { PeliculasScreen } from "../dashboard/pages/PeliculasScreen";
import { SeleccionarUsuarioScreen } from "../dashboard/pages/SeleccionarUsuarioScreen";
import { SeriesScreen } from "../dashboard/pages/SeriesScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="inicio" element={<NetplixScreen /> } />
          <Route path="series" element= { <SeriesScreen />} />
          <Route path="peliculas" element= { <PeliculasScreen />} />
          <Route path="mi-lista" element = {<MiListaScreen /> } /> 

          <Route path="buscador" element = {<BuscadorScreen /> } />
          <Route path="tu-cuenta" element = {<MiListaScreen /> } />
          {/* mover */}
          <Route path="seleccionar-cuenta" element = {<SeleccionarUsuarioScreen /> } />
      </Routes>
    </>
  );
};
