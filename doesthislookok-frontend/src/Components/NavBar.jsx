import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import caduceus from "../media/Caduceus.png"


function NavBar(){
    const user = useSelector(state=>state.user.user)
    console.log(user)
    return (
        <nav className="navbar">
            <div className = "navbar-logo"><img src = {caduceus} className = "logo"></img></div>
            <ul className = "navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/intake">Intake</Link></li>
            </ul>
            {user ?
            <p className="user-info">{user.username}</p>
            :
            <Link className="user-info" to='/login'>Login</Link>
            }
        </nav>
    )
}

export default NavBar;