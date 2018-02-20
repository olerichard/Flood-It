import React from 'react'
import "./buttonRow.css"
import Button from "../button/button"

const ButtonRow = ({ state, click }) => {
  return (<ul className="buttonRow" style={{ gridTemplateColumns: `repeat(${state.colorCount},1fr)` }}>
    {state.colorTemplates[state.chosenColor].slice(0, state.colorCount).map((c, i) => {
      return (<Button color={c} index={i} state={state} click={click} key={i} />)
    })}
  </ul>)
}

export default ButtonRow



