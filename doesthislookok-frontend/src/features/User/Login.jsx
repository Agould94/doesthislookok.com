import React, {useState, useEffect} from 'react'

import {login} from './userSlice'
import {useDispatch} from 'react-redux'

import axios from 'axios';



function Login() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) =>{
    const {name, value} = event.target
    setFormData((prevData)=>({...prevData, [name]: value}))
  }

  const handleLogin = async()=>{
    try{
      const response = await axios.post('http://localhost:8000/api/login/', formData)
      const user = response.data.user;
      dispatch(login(user))
    } catch(error){
      console.log("error")
    }
  }

  return (
    <div>
      <input type="text" name="username" onChange={handleInputChange} />
      <input type="password" name="password" onChange={handleInputChange} />
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default Login