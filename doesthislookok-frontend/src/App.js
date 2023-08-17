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

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element = {<Home></Home>}>
        </Route>
        <Route path = "/intake" element = {<Intake/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
