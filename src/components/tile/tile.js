import React from 'react'
import "./tile.css"

const Tile = ({color}) => {
    return (<li 
      className={`tile`} 
      style={
        {backgroundColor: color}
      }
    ></li>)
  }


export default Tile