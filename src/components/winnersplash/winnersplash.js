import React from 'react'
import "./winnersplash.css"
import StdButton from '../stdButton/stdButton'

const WinnerSplash = ({ state, restart }) => {
  const conditionText = state.winner === "won" ? "You have won the game!" : "You are out of moves!"

  // if(winCondition !== false )
  return (<div className="splash"><p className="conditionText">{conditionText}</p>
    <StdButton click={restart.bind(null, state)} text="Play Again!" />
  </div>)

  // return <div className="splash" style={{display:'none'}}></div> 
}

export default WinnerSplash