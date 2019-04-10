import React from 'react'
import "./winnersplash.css"
import StdButton from '../stdButton/stdButton'
import PropTypes from 'prop-types'

const WinnerSplash = ({ winner, restart }) => {
  const conditionText = winner === "won" ? "You have won the game!" : "You are out of moves!"

  return (<div className="splash"><p className="conditionText">{conditionText}</p>
    <StdButton click={restart} text="Play Again!" />
  </div>)
}

WinnerSplash.propTypes = {
  winner: PropTypes.string.isRequired,
  restart: PropTypes.func.isRequired,
}

export default WinnerSplash