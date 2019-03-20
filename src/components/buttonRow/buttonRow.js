import React from 'react'
import "./buttonRow.css"
import Button from "../button/button"
import PropTypes from 'prop-types'

const ButtonRow = ({ state, click }) => {
  return (<ul className="buttonRow" style={{ gridTemplateColumns: `repeat(${state.colorCount},50px)` }}>
    {state.colorTemplates[state.chosenColor].slice(0, state.colorCount).map((c, i) => {
      return (<Button color={c} index={i} state={state} click={click} key={i} />)
    })}
  </ul>)
}

ButtonRow.propTypes = {
  state: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired
}


export default ButtonRow



