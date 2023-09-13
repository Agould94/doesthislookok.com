import React from 'react'
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'


function UserQuestionList() {
    const user = useSelector(state=>state.user.user)
    var mark_set
    if(user){
      mark_set = user.mark_set
    }
   
  return (
    <div>
      {user ? 
      <div>
        <h1>Your Questions:</h1>
        {mark_set.map((mark)=>(
          <div key = {mark.id}>
            <p>{mark.color}</p>
            <p>{mark.description}</p>
          </div>
        ))}
      </div>
        : 
        <div>
          You must be logged in to view this feature.
        </div>}
    </div>
  )
}

export default UserQuestionList