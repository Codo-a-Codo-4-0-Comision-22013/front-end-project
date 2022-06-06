import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { languages } from '../../language';
import { Link, Outlet } from "react-router-dom";
import DarkMode from "./darkmode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import ThemeContext from '../../context/ThemeContext';
import logo from '../../assets/img/nflix.png';

const Navbar = () => {
    const _language = languages['en'];
    const { dark } = React.useContext(ThemeContext);
    const style =   dark ? "navbar-dark bg-dark":"navbar-light bg-light";
    return (
        <>
            <nav className={ "navbar navbar-expand-lg " + style }>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand" to="home"><img src={ logo } alt="logo" width={ 30 }/></Link>  
                    <Link className="navbar-brand" to="home">{_language.NAV.START}</Link>
                    <Link className="navbar-brand" to="series">{_language.NAV.SERIES}</Link> 
                    <Link className="navbar-brand" to="movie">{_language.NAV.MOVIE}</Link>
                    <Link className="navbar-brand" to="latest">{_language.NAV.LATEST}</Link> 
                    <Link className="navbar-brand" to="my-list">{_language.NAV.LIST}</Link> 
                </div>
                <DarkMode></DarkMode>
                <form class="d-flex">
                        <Link className="navbar-brand" to="search">
                            <FontAwesomeIcon icon={solid('search')} />
                        </Link>
                        <Link className="navbar-brand" to="notifications">
                            <FontAwesomeIcon icon={solid('bell')} />
                        </Link>
                        <Link className="navbar-brand" to="profile">
                            <FontAwesomeIcon icon={solid('user')} />
                        </Link>
                </form>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;