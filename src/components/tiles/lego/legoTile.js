import React from 'react'
import "./legoTile.css"

const LegoTile = ({color}) => {
    return (<li 
      className={`tile`} 
      style={
        {backgroundColor: color}
      }
    ></li>)
  }


export default LegoTile