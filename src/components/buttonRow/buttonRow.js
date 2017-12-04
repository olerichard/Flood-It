import React from 'react'
import "./buttonRow.css"
import Button from "../button/button"

const ButtonRow = ({state, click}) => {
    return (<ul className="buttonRow"> 
       {state.colors.map((c,i) => {
            return(<Button color={c} index={i} state={state} click={click} key={i}/>)
          })}
    </ul>)
  }


export default ButtonRow



