import React, {useState} from 'react'
import humanBody from "../../media/HumanBody.png"

function HumanBody() {
  const [point, setPoint] = useState(null)

    function handleBodyClick(e){
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;

        const newPoint = {x: x,y: y}

        setPoint(newPoint)
        console.log(newPoint)
        console.log(`X: ${x}, Y: ${y}`)
      }


  return (
    <div className = "outerdiv">
      <div className="body-img-div">
      <img src={humanBody} className = "body-img" onClick={handleBodyClick}></img>
        {point ?
          <div className = "point" style={{position: 'absolute', left: `${point.x}px`, top: `${point.y}px`}}>
          </div>
          :
          <div></div>
        }
      </div>
    </div>
  )
}

export default HumanBody