import React from 'react'
import "./topMenu.css"


const TopMenu = ({state}) => {
    return (<div className="topMenu">{state.turn} / {state.maxTurns} </div>)
  }


export default TopMenu



