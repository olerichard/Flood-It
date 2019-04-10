import React, { useState } from 'react'
import "./game.css"
import Board from "../board/board"
import ButtonRow from "../buttonRow/buttonRow"
import TopMenu from "../topMenu/topMenu"
import MakeMove from "../../actions/makeMove"
import RestartGame from "../../actions/restartGame"
import WinnerSplash from "../winnersplash/winnersplash"
import Settings from "../settings/settings"

export default function Game() {

  const [state, setState] = useState(RestartGame());

  const settingsClick = () => setState({ ...state, showSettings: !state.showSettings })

  const restartClick = () => setState(RestartGame(state))

  const saveClick = (boardSize, chosenColor, colorCount) => setState(RestartGame({ ...state, boardSize, chosenColor, colorCount }))

  const makeMoveClick = (color) => {
    if (state.winner === false)
      setState(MakeMove(color, state))
  }

  return (
    <div className="game" >
      <TopMenu turn={state.turn} maxTurns={state.maxTurns} showSettings={state.showSettings} restart={restartClick} setting={settingsClick} />
      <div className="playingfield">
        {state.showSettings
          ? <Settings boardSize={state.boardSize} chosenColor={state.chosenColor} colorCount={state.colorCount} colorTemplates={state.colorTemplates} save={saveClick} />
          : <Board board={state.board} colors={state.colorTemplates[state.chosenColor]} />
        }
        {state.winner === false ? null : <WinnerSplash winner={state.winner} restart={restartClick} />}
      </div>
      <ButtonRow colorCount={state.colorCount} colors={state.colorTemplates[state.chosenColor]} makeMove={makeMoveClick} />
    </div>
  )
}