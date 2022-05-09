import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/home">Home</Link>
                <Link class="navbar-brand" to="/something">Something</Link>
            </nav>
        );
}

export default Navbar;