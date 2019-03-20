import React from 'react'
import "./winnersplash.css"
import StdButton from '../stdButton/stdButton'
import PropTypes from 'prop-types'

const WinnerSplash = ({ state, restart }) => {
  const conditionText = state.winner === "won" ? "You have won the game!" : "You are out of moves!"

  return (<div className="splash"><p className="conditionText">{conditionText}</p>
    <StdButton click={restart.bind(null, state)} text="Play Again!" />
  </div>)
}

WinnerSplash.propTypes = {
  state: PropTypes.object.isRequired,
  restart: PropTypes.func.isRequired,
}

export default WinnerSplash