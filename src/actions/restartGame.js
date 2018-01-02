import InitialState from "./initialState"
import CreateBoard from "./createBoard"
import MakeMove from "./makeMove"

export default function RestartGame(state = InitialState()){

  state.colors = state.altColor[Math.floor(Math.random()*state.altColor.length)]
  state.board = CreateBoard(state.boardSize*2,state.boardSize)
  state.maxTurns = state.boardSize*state.difficulty
  state.board[0][0].collected = true
  
  return MakeMove(state.board[0][0].color,state)


  
}


