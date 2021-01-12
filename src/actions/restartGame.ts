import initialState from './initialState';
import CreateBoard from './createBoard';

import GameState from '../models/GameState';
import makeMove from './makeMove';

export default function restartGame(state: GameState = initialState()):GameState {
    state.maxTurns = state.boardSize * state.difficulty;
    state.board = CreateBoard(state.boardSize * 2, state.boardSize, state.colorCount);
    state.board[0][0].collected = true;
    state.turn = 0;
    state.showSettings = false;
    state.gameCondition = 'running';

    return makeMove(state.board[0][0].color, state);
}
