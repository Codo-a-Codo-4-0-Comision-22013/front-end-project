import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { languages } from '../../language';
import { Link, Outlet } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Navbar = () => {
    const _language = languages['en'];
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="search">
                    <FontAwesomeIcon icon={solid('search')} />
                </Link>
                <Link class="navbar-brand" to="home">{_language.NAV.START}</Link>
                <Link class="navbar-brand" to="movie">{_language.NAV.MOVIE}</Link>
                <Link class="navbar-brand" to="series">{_language.NAV.SERIES}</Link>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;