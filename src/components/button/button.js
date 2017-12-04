import React from 'react'
import "./button.css"

const Button = ({color,index,state,click}) => {
    return (<li 
      className={`button` } 
      style={{backgroundColor: color}}
      onClick={click.bind(null,index,state)}
    ></li>)
  }




export default Button