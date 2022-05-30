import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { languages } from '../../language';
import { Link, Outlet } from "react-router-dom";
import DarkMode from "./darkmode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import ThemeContext from '../../context/ThemeContext';


const Navbar = () => {
    const _language = languages['en'];
    const { dark } = React.useContext(ThemeContext);
    return (
        <>
            { dark ? "Dark Mode":"Light Mode"}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">  
                <Link className="navbar-brand" to="search">
                    <FontAwesomeIcon icon={solid('search')} />
                </Link>
                <Link className="navbar-brand" to="home">{_language.NAV.START}</Link>
                <Link className="navbar-brand" to="movie">{_language.NAV.MOVIE}</Link>
                <Link className="navbar-brand" to="series">{_language.NAV.SERIES}</Link>
                <DarkMode></DarkMode>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;