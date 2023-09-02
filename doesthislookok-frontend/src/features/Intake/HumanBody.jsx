import React, {useState} from 'react'
import humanBody from "../../media/HumanBody.png"

function HumanBody() {

    function handleBodyClick(e){
        const xCoordinate = e.nativeEvent.offsetX;
        const yCoordinate = e.nativeEvent.offsetY;
        console.log(`X: ${xCoordinate}, Y: ${yCoordinate}`)
      }


  return (
    <div>
    <img src={humanBody} className = "body-img" onClick={handleBodyClick}></img>
    </div>
  )
}

export default HumanBody