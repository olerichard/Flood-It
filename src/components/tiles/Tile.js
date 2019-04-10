import React from 'react'
import "./Tile.css"
import PropTypes from 'prop-types'

const StandardTile = ({ color }) => {
  return (<li
    className={`tile`}
    style={
      { backgroundColor: color }
    }
  ></li>)
}

StandardTile.prototype = {
  color: PropTypes.string.isRequired
}

export default StandardTile