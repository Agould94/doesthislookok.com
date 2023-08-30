import React from "react";
import axios from "axios";

import { logoutUser } from "../../api";

function Logout(){

    const handleLogout = async()=>{
        try{
            await logoutUser();
        } catch(error){
            console.log('error')
        }
    };

    return(
        <div>
            <button className="site-button" onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default Logout;