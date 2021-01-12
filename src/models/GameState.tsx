import Board from './Board';

export type GameCondition = 'won' | 'lost' | 'running';

type GameState = {
    turn: number;
    maxTurns: number;
    showSettings: boolean;
    boardSize: number;
    colorTemplates: string[][];
    chosenColor: number;
    colorCount: number;
    difficulty: number;
    board: Board;
    gameCondition: GameCondition;
};

export default GameState;
