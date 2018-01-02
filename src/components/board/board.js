import React, { Component } from 'react'
import shortId from 'shortid'
import "./board.css"
import Tile from "../tiles/standardTile/standardTile"
import WinnerSplash from "../winnersplash/winnersplash"

const Board = ({board,colors,size,winCondition}) => {
  return( <div className="board" key="board" style={{height : size.height-190,width:size.width }}  >{
      board.map((line) => { 
       return <ul className={`line`}  key={shortId.generate()} >
          {line.map((t) => {
            return(<Tile color={colors[t.color]} key={shortId.generate()}/>)
          })}
        </ul>  
      })}
       <WinnerSplash winCondition={winCondition} size = {size}  />
    </div>
  )
}
  export default Board