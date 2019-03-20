import React, { Component } from 'react'
import "./game.css"
import Board from "../board/board"
import ButtonRow from "../buttonRow/buttonRow"
import TopMenu from "../topMenu/topMenu"
import MakeMove from "../../actions/makeMove"
import RestartGame from "../../actions/restartGame"
import WinnerSplash from "../winnersplash/winnersplash"
import Settings from "../settings/settings"

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.restartClick = this.restartClick.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
    this.settingsClick = this.settingsClick.bind(this)
    this.saveClick = this.saveClick.bind(this)
    this.state = {}
  }

  componentDidMount() {
    const newState = RestartGame()
    this.setState(newState)
  }

  settingsClick = (state) => {
    state.showSettings = state.showSettings ? false : true
    this.setState(state)
  }

  buttonClick = (color, state) => {
    if (state.winner === false)
      this.setState(MakeMove(color, state))
  }

  restartClick = (state) => {
    this.setState(RestartGame(state))
  }

  saveClick = (newState) => {
    this.setState(RestartGame(newState))
  }

  render() {
    if (this.state.board === undefined) { return (<p>Loading..</p>) }

    let board = this.state.showSettings ?
      <Settings state={this.state} save={this.saveClick} /> :
      <Board board={this.state.board} colors={this.state.colorTemplates[this.state.chosenColor]} />
    let splash = this.state.winner !== false ? <WinnerSplash state={this.state} restart={this.restartClick} /> : null

    return (
      <div className="game" >
        <TopMenu state={this.state} restart={this.restartClick} setting={this.settingsClick} />
        <div className="playingfield">
          {board}
          {splash}
        </div>
        <ButtonRow state={this.state} click={this.buttonClick} />
      </div>)
  }


}