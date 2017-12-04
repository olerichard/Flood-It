import React, { Component } from 'react'
import shortId from 'shortid'
import "./board.css"
import Tile from "../tile/tile"

const Board = ({board,colors,size}) => {
  return( <div className="board" key="board" style={{height : size.height-190,width:size.width }}  >{
      board.map((line) => { 
       return <ul className={`line`}  key={shortId.generate()} >
          {line.map((t) => {
            return(<Tile color={colors[t.color]} key={shortId.generate()}/>)
          })}
        </ul>  
      })}
    </div>
  )
}
  export default Board