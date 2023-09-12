import React from 'react'
import { Link } from 'react-router-dom'
import Questions from '../features/User/Questions'
import Logout from '../features/User/Logout'
import { useSelector } from 'react-redux'

function Home() {
  const user = useSelector(state=>state.user.user)
  return (
    <div>
        <h1 className = "welcome">Welcome to Doesthislookok.com, the place where you can come to ask, does this look ok?</h1>
       <Link to = "/intake">
        <button className='site-button'>Check if it looks ok</button>
        </Link>
        <Questions></Questions>
        <Logout></Logout>
        

    </div>
  
  )
}

export default Home