import React from "react";
import axios from "axios";

function Logout(){

    const handleLogout = async()=>{
        try{
            await axios.get('http://localhost:8000/api/logout/');
        } catch(errir){
            console.log('error')
        }
    };

    return(
        <div>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default Logout;