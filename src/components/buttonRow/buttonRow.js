import React from 'react'
import "./buttonRow.css"
import Button from "../button/button"
import PropTypes from 'prop-types'

const ButtonRow = ({ colorCount, colors, makeMove }) => {
  return (<ul className="buttonRow" style={{ gridTemplateColumns: `repeat(${colorCount},50px)` }}>
    {colors.slice(0, colorCount).map((c, i) => {
      return (<Button color={c} index={i} click={makeMove} key={i} />)
    })}
  </ul>)
}

ButtonRow.propTypes = {
  colorCount: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired
}

export default ButtonRow



