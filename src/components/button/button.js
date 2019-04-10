import React from 'react'
import "./button.css"
import PropTypes from 'prop-types'

const Button = ({ color, index, click }) => {
  return (<li
    className={`button`}
    style={{ backgroundColor: color }}
    onClick={click.bind(null, index)}
  ></li>)
}


Button.propTypes = {
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired
}

export default Button