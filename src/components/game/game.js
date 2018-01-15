import React, { Component } from 'react'
import "./game.css"
import Board from "../board/board"
import ButtonRow from "../buttonRow/buttonRow"
import TopMenu from "../topMenu/topMenu"
import Settings from "../settings/settings"
import MakeMove from "../../actions/makeMove"
import RestartGame from "../../actions/restartGame"

export default class Game extends Component {
  constructor(props){
    super(props);

    this.windowSize = this.windowSize.bind(this)
    this.restartClick = this.restartClick.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
    this.settingsClick = this.settingsClick.bind(this)
    this.resize = this.resize.bind(this)
    this.updateSetting = this.updateSetting.bind(this)
    this.state={}
  }
  
  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyPress);
    window.addEventListener('resize', this.resize)
    const newState = RestartGame()
    newState.window = this.windowSize(window.innerHeight,window.innerWidth)
    this.setState(newState) 

  }  
  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyPress);
    window.removeEventListener('resize', this.resize)
  }
  
  settingsClick = (state) => {
    state.showSettings = state.showSettings ? false : true
    this.setState(state)
  }

  updateSetting = (state,settingName,newValue) => {
    if(state[settingName] !== newValue)
    {
      state[settingName] = newValue
      this.setState(state)
    }
  }

  buttonClick = (color,state) => {
    if(state.winner === false)
      this.setState(MakeMove(color,state))
  }

  restartClick = () => {
    const newState = RestartGame()
    newState.window = this.windowSize(window.innerHeight,window.innerWidth)
      this.setState(newState)
  }


  windowSize = (h,w) =>{ 
    return {width:h/2.5,height:h}
  }

  resize = () =>{
    this.setState({window: this.windowSize(window.innerHeight,window.innerWidth)})
  }

  render() {    
    if(this.state.board === undefined){
      return (<p>Loading..</p>)
    }
    let settings = null
    if(this.state.showSettings){
     settings = <Settings state={this.state} update={this.updateSetting}/>
    }

    return (
      <div className="game" style={{height : this.state.window.height,width:this.state.window.width }} >
        
          <TopMenu state={this.state} restart={this.restartClick} setting={this.settingsClick} />
          <Board board={this.state.board} colors={this.state.colors} size={this.state.window} winCondition={this.state.winner} restart={this.restartClick} />
          <ButtonRow state={this.state} click={this.buttonClick} save={this.restartClick} />
        {settings}
      </div>)
  }


}