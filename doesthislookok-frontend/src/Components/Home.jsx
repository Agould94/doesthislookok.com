import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1 className = "welcome">Welcome to Doesthislookok.com, the place where you can come to ask, does this look ok?</h1>
       <Link to = "/intake">
        <button>Check if it looks ok</button>
        </Link>
    </div>
  
  )
}

export default Home