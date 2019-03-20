import React from 'react'
import shortId from 'shortid'
import PropTypes from 'prop-types'
import "./board.css"
import Tile from "../tiles/Tile"


const Board = ({ board, colors }) => {

  return (<div className="board" key="board">{
    board.map((line) => {
      return <ul className={`line`} key={shortId.generate()} >
        {line.map((t) => {
          return (<Tile color={colors[t.color]} key={shortId.generate()} />)
        })}
      </ul>
    })}

  </div>
  )
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired
}

export default Board