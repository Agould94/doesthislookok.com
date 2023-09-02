import React, {useState, useEffect} from 'react'
import axios from 'axios';

import HumanBody from './HumanBody';

function Intake() {
  const [size, setSize] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [texture, setTexture] = useState('');
  const [hasGrown, setHasGrown] = useState(false);



  const handleSubmit=(e)=>{
    e.preventDefault()

    const formData = {size, description, color, texture, has_grown: hasGrown}
    axios.post("http://localhost:8000/marks", formData)
    .then(response =>{
      console.log('Form submitteed successfully:', response.data)
      setSize('');
      setDescription('');
      setColor('');
      setTexture('');
      setHasGrown(false);
    })
    .catch(error => {
      console.error('Form submission error:', error);
    });


  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>
            Size:
            <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
          </label>
          <br />
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <br />
          <label>
            Color:
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
          </label>
          <br />
          <label>
            Texture:
            <input type="text" value={texture} onChange={(e) => setTexture(e.target.value)} />
          </label>
          <br />
          <label>
            Has Grown:
            <input type="radio" name="hasGrown" value="true" checked={hasGrown} onChange={() => setHasGrown(true)} /> Yes
            <input type="radio" name="hasGrown" value="false" checked={!hasGrown} onChange={() => setHasGrown(false)} /> No
          </label>
          <br />
          <button type="submit">Submit</button>
          <br/>
          <p>Where on your body is this mark?</p>
          <HumanBody></HumanBody>
        </form>
      </div>
  )
}

export default Intake