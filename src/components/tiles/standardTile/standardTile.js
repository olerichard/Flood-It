import React from 'react'
import "./standardTile.css"

const StandardTile = ({color}) => {
    return (<li 
      className={`tile`} 
      style={
        {backgroundColor: color}
      }
    ></li>)
  }


export default StandardTile