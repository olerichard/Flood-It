import { useCallback, useEffect, useState } from 'react';
import createBoard from '../actions/createBoard';
import Board from '../models/Board';
import Game, { GameCondition } from '../models/GameState';
import Settings from '../models/SettingsType';
import useColorTemplates from './useColorTemplates';

const move = (color: string, board: Board): Board => {
    for (let r = 0; r < board.length; r++) {
        for (let t = 0; t < board[r].length; t++) {
            if (board[r][t].collected === true) {
                //if not left most tile, check left.
                if (t > 0 && board[r][t - 1].color === color) board[r][t - 1].collected = true;

                //if not right most tile, check right
                if (t < board[r].length - 1 && board[r][t + 1].color === color)
                    board[r][t + 1].collected = true;

                //if not bottom row, check below
                if (r < board.length - 1 && board[r + 1][t].color === color)
                    board[r + 1][t].collected = true;

                //if not top row, check above. Also checking if previously not collect. As we need to move back up a row it it was not.
                //This to check if the tile above this one also needs to be added.
                if (
                    r - 1 >= 0 &&
                    board[r - 1][t].color === color &&
                    board[r - 1][t].collected !== true
                ) {
                    board[r - 1][t].collected = true;
                    r = r > 1 ? r - 2 : 0;
                    break;
                }
            }
        }
    }
    return [
        ...board.map((r) =>
            r.map((tile) => ({ ...tile, color: tile.collected ? color : tile.color }))
        ),
    ];
};

const checkGameCondition = (game: Game): GameCondition =>
    !game.board.some((row) => row.some((tile) => !tile.collected))
        ? 'won'
        : game.maxTurns <= game.turn
        ? 'lost'
        : 'running';

const createNewGame = (settings: Settings): Game => {
    const colors = useColorTemplates().getTemplate(settings.template);

    const game: Game = {
        turn: 1,
        maxTurns: settings.boardSize * settings.difficulty,
        colors: colors,
        board: createBoard(settings.boardSize * 2, settings.boardSize, settings.colorCount, colors),
        gameCondition: 'running',
    };

    game.board = move(game.board[0][0].color, game.board);

    return game;
};

type UseGame = {
    game: Game;
    resetGame: () => void;
    makeMove: (color: string) => void;
};

const useGame = (settings: Settings): UseGame => {
    const [game, setGame] = useState<Game>(createNewGame(settings));

    const resetGame = useCallback(() => {
        setGame(createNewGame(settings));
    }, [settings]);

    useEffect(() => {
        console.log('GAME STATE:', game);
    }, [game]);

    const makeMove = useCallback(
        (color: string) => {
            if (game.gameCondition !== 'running') return;

            game.board = move(color, game.board);
            game.turn++;
            game.gameCondition = checkGameCondition(game);

            setGame({ ...game });
        },
        [game]
    );

    return { game, resetGame, makeMove };
};

export default useGame;
