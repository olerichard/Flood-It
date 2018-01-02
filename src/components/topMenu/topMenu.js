import React from 'react'
import Fa from 'font-awesome/css/font-awesome.css'
import "./topMenu.css"


const TopMenu = ({state, restart}) => 
  {
    var str = "000" + state.turn
    return ( <div className="topMenu">
      <div  className="score">MOVES: {str.substring(str.length-state.maxTurns.toString().length)} / {state.maxTurns}</div> 
      <div className="restart">
        <i className="fa fa-refresh"></i>
        <i className="fa fa-navicon"></i>
      </div>
      
    </div>)
  }


export default TopMenu



