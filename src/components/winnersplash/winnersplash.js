import React from 'react'
import "./winnersplash.css"
import RestartGame from "../../actions/restartGame"

const WinnerSplash = ({winCondition = false,size}) => {
  const conditionText = winCondition === "won" ? "You have won the game!" :  "You are out of moves!"
  
  if(winCondition !== false )
    return (<div className="splash" style={{width:size.width, top:size.height*0.30 }}><p>{conditionText}</p>
    <div click={()=>{this.setState(RestartGame())}} >Play Again!</div>
    </div>)

  return <div className="splash" style={{display:'none'}}></div> 
}

export default WinnerSplash