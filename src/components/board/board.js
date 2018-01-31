import React from 'react'
import shortId from 'shortid'
import "./board.css"
import Tile from "../tiles/standardTile/standardTile"
import WinnerSplash from "../winnersplash/winnersplash"
import Settings from "../settings/settings"

const Board = ({board,colors,size,winCondition,restart,setting,state}) => {
  
  let splash = ""
  let settings = ""
  if(winCondition !== false)
    splash = <WinnerSplash winCondition={winCondition}  restart={restart} />
  
  if(setting.showSettings && splash === "")
      settings = <Settings state={state} update={setting.updateSetting} restart={restart} save = {setting.save}/>
  
  return( <div className="board" key="board">{
      board.map((line) => { 
       return <ul className={`line`}  key={shortId.generate()} >
          {line.map((t) => {
            return(<Tile color={colors[t.color]} key={shortId.generate()}/>)
          })}
        </ul>  
      })}
        {splash}
        {settings}
    </div>
  )
}
  export default Board