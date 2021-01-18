import Board from './Board';

export type GameCondition = 'won' | 'lost' | 'running';

type GameState = {
    turn: number;
    maxTurns: number;
    colors: string[];
    board: Board;
    gameCondition: GameCondition;
};

export default GameState;
