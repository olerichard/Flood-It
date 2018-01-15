import React from 'react'
import "./stdButton.css"

const StdButton = ({click =function(){alert("Button pressed")},text,toggle = false }) => {
  
  let toggleClass = ""
  if(toggle)
     toggleClass = "stdButtonToggle"
  
  return (<div className={`stdButton ${toggleClass}`}  onClick={click} >{text}</div>)
  }

export default StdButton