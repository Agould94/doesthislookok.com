import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Questions() {
    const [questions, setQuestions] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/questions/')
            .then(response=>{
                console.log(JSON.parse(response.data))
                const data = JSON.parse(response.data)
                console.log(data[0].fields.title)
                setQuestions(data);
            })
            .catch(error =>{
                console.error(error);
            })
    },[])
    
  return (
    <div>
        <h1>Your Questions:</h1>
        <div>
            {questions[0].fields.title}
        </div>
    </div>
  )
}

export default Questions