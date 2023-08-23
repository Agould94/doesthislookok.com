import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar">
            <div className = "navbar-logo">DTLOK</div>
            <ul className = "navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/intake">Intake</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar