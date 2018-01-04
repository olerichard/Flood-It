import React from 'react'
import shortId from 'shortid'
import "./board.css"
import Tile from "../tiles/standardTile/standardTile"
import WinnerSplash from "../winnersplash/winnersplash"

const Board = ({board,colors,size,winCondition,restart}) => {
  
  let splash = ""
  if(winCondition !== false)
    splash = <WinnerSplash winCondition={winCondition} size = {size} restart={restart} />
  
  
  return( <div className="board" key="board" style={{height : size.height-190,width:size.width }}  >{
      board.map((line) => { 
       return <ul className={`line`}  key={shortId.generate()} >
          {line.map((t) => {
            return(<Tile color={colors[t.color]} key={shortId.generate()}/>)
          })}
        </ul>  
      })}
        {splash}
    </div>
  )
}
  export default Board