//css
import './App.css';

//react, react routers
import {useState, useEffect} from "react";
import {Switch, Route, BrowserRouter as Router, Routes} from "react-router-dom";

//redux
import {useDispatch, useSelector} from "react-redux"

//features

//home
import Home from './Components/Home';

//intake
import Intake from './features/Intake/Intake';

import Signup from './features/User/Signup';
import Login from './features/User/Login';

//navbar
import NavBar from './Components/NavBar';

import axios from 'axios';
import { getUser } from './api';
import { setUser } from './features/User/userSlice';


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    getUser()
    .then(response => {dispatch(setUser(response.data.user))}
    )
    .catch(error=>{
      console.log(error)
    })
  },[])

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route exact path = "/" element = {<Home></Home>}>
        </Route>
        <Route path = "/intake" element = {<Intake/>}>
        </Route>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
