import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Questions() {
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get('http://localhost:8000/questions/')
            .then(response=>{
                console.log(JSON.parse(response.data))
                const data = JSON.parse(response.data)
                console.log(data[0].fields.title)
                setQuestions(data);
                setLoading(false)
            })
            .catch(error =>{
                console.error(error);
            })
    },[])

  return (
    <div>
        <h1>Your Questions:</h1>
        <div>
            {loading ? <div>loading </div> : <div>{questions[0].fields.title}</div>}
        </div>
    </div>
  )
}

export default Questions