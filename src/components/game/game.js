import React, { Component } from 'react'
import "./game.css"
import Board from "../board/board"
import WinnerSplash from "../winnersplash/winnersplash"
import ButtonRow from "../buttonRow/buttonRow"
import TopMenu from "../topMenu/topMenu"
import CreateBoard from "../../actions/createBoard"
import MakeMove from "../../actions/makeMove"

const initialState={
  boardSize :5,  
  altColor: [['red','blue','orange','purple','yellow','brown','green'],
            ['#FC726D','#2E4F6D','#35AE57','#F7931E','#FFCE55','#AF4175','#29CCC0'] ],
  colors : [],  
  turn : 0,
  maxTurns: 0,
  difficulty: 3,
  winner: false,
  window:{width:300,height:750}
}

export default class Game extends Component {
  constructor(props){
    super(props);

    this.windowSize = this.windowSize.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
    this.resize = this.resize.bind(this)
    this.state={}
  }
  
  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyPress);
    window.addEventListener('resize', this.resize)

    const state = Object.assign({},initialState)
    state.colors = state.altColor[0]
    state.board = CreateBoard(state.boardSize*2,state.boardSize)
    state.maxTurns = state.boardSize*state.difficulty
    state.window = this.windowSize(window.innerHeight,window.innerWidth)
    state.board[0][0].collected = true
    
    this.setState(MakeMove(state.board[0][0].color,state))
  }  
  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyPress);
    window.removeEventListener('resize', this.resize)
  }

  buttonClick = function(color,state){
    this.setState(MakeMove(color,state))
  }

  windowSize = function(h,w){
    return {width:h/2.5,height:h}
  }

  resize = function(){
    this.setState({window: this.windowSize(window.innerHeight,window.innerWidth)})
  }

  render() {    
    if(this.state.board === undefined){
      return (<p>Loading..</p>)
    }


    if(this.state.winner !== false){
      return (
      <div className="game" style={{height : this.state.window.height,width:this.state.window.width }} >
        <TopMenu state={this.state}/>
        <Board board={this.state.board} colors={this.state.colors} size={this.state.window}/>
        <WinnerSplash status={this.state.winner} />
        <ButtonRow state={this.state} click={()=>{}} />
      </div>)
    }
    return (
      <div className="game" style={{height : this.state.window.height,width:this.state.window.width }} >
        <TopMenu state={this.state}/>
        <Board board={this.state.board} colors={this.state.colors} size={this.state.window}/>
        <ButtonRow state={this.state} click={this.buttonClick} />
      </div>)
  }


}