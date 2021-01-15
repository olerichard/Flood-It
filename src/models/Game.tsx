import Board from './Board';

export type GameCondition = 'won' | 'lost' | 'running';

type Game = {
    turn: number;
    maxTurns: number;
    colors: string[];
    board: Board;
    gameCondition: GameCondition;
};

export default Game;
