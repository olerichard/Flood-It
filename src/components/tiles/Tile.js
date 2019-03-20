import React from 'react'
import "./Tile.css"

const StandardTile = ({ color }) => {
  return (<li
    className={`tile`}
    style={
      { backgroundColor: color }
    }
  ></li>)
}


export default StandardTile