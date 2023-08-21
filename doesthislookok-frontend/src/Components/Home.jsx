import React from 'react'
import { Link } from 'react-router-dom'
import Questions from '../features/User/Questions'

function Home() {
  return (
    <div>
        <h1 className = "welcome">Welcome to Doesthislookok.com, the place where you can come to ask, does this look ok?</h1>
       <Link to = "/intake">
        <button>Check if it looks ok</button>
        </Link>
        <Questions></Questions>
    </div>
  
  )
}

export default Home