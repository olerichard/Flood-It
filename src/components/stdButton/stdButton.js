import React from 'react'
import "./stdButton.css"
import PropTypes from 'prop-types'

const StdButton = ({ click, text, toggle = false, style = {} }) => {
  return (<div className={`stdButton ${toggle ? "stdButtonToggle" : ""}`} onClick={click} style={style} >{text}</div>)
}

StdButton.propTypes = {
  click: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  toggle: PropTypes.bool,
  style: PropTypes.object
}

export default StdButton