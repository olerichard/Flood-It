import React from 'react'
import Fa from 'font-awesome/css/font-awesome.css'
import "./topMenu.css"


const TopMenu = ({state, restart,setting}) => 
  {
    const menuStyle = state.showSettings ? {background: "#AF4175"} : {}

    var str = "000" + state.turn
    return ( <div className="topMenu">
      <div  className="score">MOVES: {str.substring(str.length-state.maxTurns.toString().length)} / {state.maxTurns}</div> 
      <div className="menuButtons">
      <div id="refresh" className="menuButton">
        <i 
          className="fa fa-refresh" 
          onClick={restart}
        ></i>
      </div>
      <div id="settings" className="menuButton" style ={menuStyle}>
        <i className="fa fa-navicon"
          onClick={setting.bind(null,state)}
        ></i>
      </div>
      </div>
    </div>)
  }


export default TopMenu



