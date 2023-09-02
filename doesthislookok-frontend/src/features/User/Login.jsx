import React, {useState, useEffect} from 'react'

import {login} from './userSlice'
import {useDispatch, useSelector} from 'react-redux'


import axios from 'axios';

import { loginUser } from '../../api';

function Login() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loggedIn, setLoggedIn] = useState(false)

  const handleInputChange = (event) =>{
    const {name, value} = event.target
    setFormData((prevData)=>({...prevData, [name]: value}))
  }

  const handleLogin = async(e)=>{
    e.preventDefault()
    try{
      const response = await loginUser(formData)
      console.log(response)
      const user = response.data; 
      setLoggedIn(true)
      console.log(user)
      dispatch(login(user))

    } catch(error){
      console.log("error")
    }
  }

  return (
    <div className='page-center'>
      {loggedIn ? <div>Welcome</div> :
      <div className = "loginbox">
        <p className='labeltext'>Email:</p>
        <input type="text" name="email" onChange={handleInputChange} />
        <p className='labeltext'>Password:</p>
        <input type="password" name="password" onChange={handleInputChange} />
        <button className='loginbutton site-button' onClick={handleLogin}>Log In</button>
      </div>
      }
    </div>
  )
}

export default Login