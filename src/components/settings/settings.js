import React from 'react'
import "./settings.css"
import StdButton from '../stdButton/stdButton'

const Settings = ({state , update, restart, save}) => {

  const style = {
                flex:1,
                margin: "2px",
                }
            
   const saveBtnStyle = {
                  width:"60%",                  
                  }
  

  return ( 
    <div className="settings">
      
      <div className="boardSize">
        <div className="boardSizeHeader">BOARD SIZE</div>
        <div className="boardSizeSettings">
          <StdButton text="5"  toggle = {state.boardSize===5  ? true:false} click = {update.bind(null,state,"boardSize",5)} style={style} />
          <StdButton text="10" toggle = {state.boardSize===10 ? true:false} click = {update.bind(null,state,"boardSize",10)} style={style}/>
          <StdButton text="20" toggle = {state.boardSize===20 ? true:false} click = {update.bind(null,state,"boardSize",20)} style={style}/>
        </div>
      </div>
      
      <div className="colorScheme">
        <div className="colorSchemeHeader">COLORS</div>
        <div className="colorSchemeSettings">
        <StdButton text="scheme1" style={style}/>
        <StdButton text="scheme2" style={style}/>
        </div>
      </div>

      <div className="difficulty"> 
        <div className="difficultyHeader">DIFFICULTY</div>
        <div className="difficultySettings">  
        <StdButton text="Easy" toggle = {state.difficulty===3  ? true:false} click = {update.bind(null,state,"difficulty",3)} style={style}/>
        <StdButton text="Medium" toggle = {state.difficulty===2  ? true:false} click = {update.bind(null,state,"difficulty",2)} style={style}/>
        <StdButton text="Hard"toggle = {state.difficulty===1 ? true:false} click = {update.bind(null,state,"difficulty",1)} style={style}/>
        </div>
      </div>
      <StdButton text="SAVE" click = {save.bind(null,state)} style ={saveBtnStyle} />
    </div>

  )  
}

export default Settings

