import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (e) =>{
        setSelectedFile(e.target.files[0])
        console.log(selectedFile)
    }

  return (
    <div>
        <label className = "custom-file-upload">
            <input type="file" accept="image/jpeg" onChange={handleFileChange}/>
            Upload Image
        </label>
        <br/>
        {selectedFile && <div>{selectedFile.name}</div>}
        <div>
            <Link to="/intake" state={{image: selectedFile}}>
                <button className = 'site-button'>Continue</button>
            </Link>
        
        </div>
    </div>
  )
}

export default ImageUpload