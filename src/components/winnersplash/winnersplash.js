import React from 'react'
import "./winnersplash.css"
import StdButton from '../stdButton/stdButton'

const WinnerSplash = ({winCondition = false,size,restart}) => {
  const conditionText = winCondition === "won" ? "You have won the game!" :  "You are out of moves!"
  
 // if(winCondition !== false )
    return (<div className="splash" style={{width:size.width, top:size.height*0.30 }}><p>{conditionText}</p>
              <StdButton click={restart} text="Play Again!"  />
            </div>)

 // return <div className="splash" style={{display:'none'}}></div> 
}

export default WinnerSplash