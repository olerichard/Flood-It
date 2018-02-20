import React from 'react'
import shortId from 'shortid'
import "./board.css"
import Tile from "../tiles/standardTile/standardTile"

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
export default Board