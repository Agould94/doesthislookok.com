import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {login} from './userSlice'
import {useDispatch} from 'react-redux'




function Signup(){
    const [formData, setFormData] = useState({
        username:'',
        email: '',
        password: ''
    })

    const handleInputChange = (event)=>{
        const {name, value} = event.target;
        setFormData((prevData=>({...prevData, [name]:value})))
    }

    const handleSignup = async()=>{
        try{
            const response = await axios.post('http://localhost:8000/api/register/', formData);
            const user = response.data.user;
            dispatchEvent(login(user))
        } catch(error){
            return "error"
        }
    }

    return (
        <div>
            <p>name</p>
            <input type="text" name="username" onChange={handleInputChange} />
            <p>email</p>
            <input type="email" name="email" onChange={handleInputChange} />
            <p>password</p>
            <input type="password" name="password" onChange={handleInputChange} />

            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );

}
export default Signup;