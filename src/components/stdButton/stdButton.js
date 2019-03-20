import React from 'react'
import "./stdButton.css"
import PropTypes from 'prop-types'

const StdButton = ({ click, text, toggle = false, style = {} }) => {

  let toggleClass = ""

  if (toggle)
    toggleClass = "stdButtonToggle"

  return (<div className={`stdButton ${toggleClass}`} onClick={click} style={style} >{text}</div>)
}

StdButton.propTypes = {
  click: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  toggle: PropTypes.bool,
  style: PropTypes.object
}

export default StdButton