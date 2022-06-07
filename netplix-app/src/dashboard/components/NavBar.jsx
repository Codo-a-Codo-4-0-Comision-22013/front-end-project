import { Link } from "react-router-dom";
import logoNetplix from "../../assets/imgs/logo.png";
export const NavBar = () => {
  return (
    <nav className="px-5 bg-white ">
      <div className="flex">
        <Link className="mr-4" to="/inicio">
          <img className="h-16 w-16" src={logoNetplix} alt="" />
        </Link>

        <div className="my-5 font-bold">
          <Link className="mr-4" to="/inicio">
            Inicio
          </Link>
          <Link className="mr-4" to="/series">
            Series
          </Link>
          <Link className="mr-4" to="/peliculas">
            Películas
          </Link>
          <button className="mr-4 font-bold pointer-events-none">
            Novedades populares (Proximamente)
          </button>
          <Link to="/mi-lista">Mi Lista</Link>
        </div>
      </div>
    </nav>
    // icono netflix - Inicio - Series - Peliculas - Novedades populares (Proximamente) - Mi Lista ------> lupa - notificaciones - perfil
  );
};
