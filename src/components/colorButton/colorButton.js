import React from 'react'
import "./colorButton.css"
import Tile from "../tiles/Tile"
import PropTypes from 'prop-types'

const ColorButton = ({ click, text, toggle = false, style = {}, colors }) => {
  return (<div className={`colorButton ${toggle ? "colorButtonToggle" : ""}`} onClick={click} style={style} >{text}
    <ul className="colors">
      {colors.map((c) => {
        return (<Tile color={c} key={c} />)
      })}
    </ul>
  </div>)
}

ColorButton.propTypes = {
  click: PropTypes.func.isRequired,
  text: PropTypes.string,
  toggle: PropTypes.bool,
  style: PropTypes.object,
  colors: PropTypes.string.isRequired

}

export default ColorButton






