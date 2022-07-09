import "./MenuNavigation.css";
import { Link } from "react-router-dom";
import netflixLogo from '../../../assets/imgs/netflix-logo.png';

const MenuNavigation = () => {
  return (
    <div className="MenuNavigation" >
        <Link to="/">
            <img className="MenuLogo" src={netflixLogo} alt="Netflix home page" />
        </Link>
        <Link to="/listado-peliculas">Peliculas</Link>
    </div>
  );
}

export default MenuNavigation;