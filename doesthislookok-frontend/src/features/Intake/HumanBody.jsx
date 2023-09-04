import React, {useState} from 'react'
import humanBody from "../../media/HumanBody.png"

function HumanBody(props) {
  const {point, setPoint} = props
  //const [point, setPoint] = useState(null)

    function handleBodyClick(e){
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.clientY;
        const image = e.target;
        const rect = image.getBoundingClientRect()
        console.log(rect)
        console.log(rect.x, rect.y)

        const newx = x+rect.x-10
        const newy = y-rect.top-10

        const newPoint = {x: newx,y: newy}

        setPoint(newPoint)
        console.log(newPoint)
        console.log(`X: ${x}, Y: ${y}`)
  
      }


  return (
    <div className = "outerdiv">
      <div className="body-img-div">
      <img src={humanBody} className = "body-img" onMouseDown={handleBodyClick}></img>
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