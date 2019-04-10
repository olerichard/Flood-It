import React from 'react'
import 'font-awesome/css/font-awesome.css'
import "./topMenu.css"
import PropTypes from 'prop-types'

const TopMenu = ({ turn, maxTurns, showSettings, restart, setting }) => {
  const menuStyle = showSettings ? { background: "#AF4175" } : {}

  const paddedTurn = "00000" + turn
  return (<div className="topMenu">
    <div className="score"> {paddedTurn.substring(paddedTurn.length - maxTurns.toString().length)}/{maxTurns}</div>
    <div className="menuButtons">
      <div id="refresh" className="menuButton">
        <i
          className="fa fa-refresh"
          onClick={restart}
        ></i>
      </div>
      <div id="settings" className="menuButton" style={menuStyle}>
        <i className="fa fa-navicon"
          onClick={setting}
        ></i>
      </div>
    </div>
  </div>)
}

TopMenu.propTypes = {
  turn: PropTypes.number.isRequired,
  maxTurns: PropTypes.number.isRequired,
  showSettings: PropTypes.bool.isRequired,
  restart: PropTypes.func.isRequired,
  setting: PropTypes.func.isRequired
}


export default TopMenu



