import { useCallback, useEffect, useState } from 'react';
import createBoard from '../actions/createBoard';
import Board from '../models/Board';
import Game, { GameCondition } from '../models/Game';
import Settings from '../models/Settings';
import useColorTemplates from './useColorTemplates';

const move = (color: string, board: Board) => {
    for (let r = 0; r < board.length; r++) {
        for (let t = 0; t < board[r].length; t++) {
            if (board[r][t].collected === true) {
                if (t - 1 >= 0) {
                    if (board[r][t - 1].color === color) board[r][t - 1].collected = true;
                }
                if (t + 1 < board[r].length) {
                    if (board[r][t + 1].color === color) board[r][t + 1].collected = true;
                }

                if (r + 1 < board.length) {
                    if (board[r + 1][t].color === color) board[r + 1][t].collected = true;
                }
                if (r - 1 >= 0) {
                    if (board[r - 1][t].color === color) {
                        if (board[r - 1][t].collected !== true) {
                            board[r - 1][t].collected = true;
                            r = r > 1 ? r - 2 : 0;
                            break;
                        }
                    }
                }
            }
        }
    }
    board.map((r) => r.map((l) => (l.color = l.collected === true ? color : l.color)));

    return [...board];
};

const checkGameCondition = (game: Game): GameCondition => {
    let currentCondition = game.gameCondition;

    return currentCondition;
};

const createNewGame = (settings: Settings): Game => ({
    turn: 0,
    maxTurns: settings.boardSize * settings.difficulty,
    colors: useColorTemplates().getTemplate(settings.template),
    board: createBoard(settings.boardSize * 2, settings.boardSize, settings.colorCount),
    gameCondition: 'running',
});

const useGame = (settings: Settings) => {
    const [game, setGame] = useState<Game>(createNewGame(settings));

    useEffect(() => {
        createNewGame(settings);
    }, [settings]);

    const makeMove = useCallback((color: string) => {
        setGame((prevState) => {
            prevState.board = move(color, prevState.board);
            prevState.turn++;
            prevState.gameCondition = checkGameCondition(prevState);

            return {
                ...prevState,
            };
        });
    }, []);

    return { game, makeMove };
};

export default useGame;
