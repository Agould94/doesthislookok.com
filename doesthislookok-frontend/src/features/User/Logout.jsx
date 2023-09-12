import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../../api";
import {logout} from './userSlice'

function Logout(){
    const dispatch = useDispatch();

    const handleLogout = async()=>{
        try{
            await logoutUser();
            dispatch(logout())
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