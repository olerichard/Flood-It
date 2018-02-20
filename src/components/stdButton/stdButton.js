import React from 'react'
import "./stdButton.css"

const StdButton = ({click =function(){console.log("Button pressed")},text,toggle = false,style ={} }) => {
  
  let toggleClass = ""
  
  if(toggle)
     toggleClass = "stdButtonToggle"
  
  return (<div className={`stdButton ${toggleClass}`}  onClick={click} style={style} >{text}</div>)
  }

export default StdButton