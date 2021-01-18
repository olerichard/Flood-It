import Board from '../models/Board';
import Tile from '../models/Tile';

const tileColor = (colorCount: number, colors: string[]): Tile => ({
    color: colors[Math.floor(Math.random() * colorCount)],
    collected: false,
});

const createBoard = (
    rows: number,
    tilesPerRow: number,
    colorCount: number,
    colors: string[]
): Board => {
    const board = Array(rows)
        .fill('')
        .map(() =>
            Array(tilesPerRow)
                .fill('')
                .map(() => tileColor(colorCount, colors))
        );
    board[0][0].collected = true;
    return board;
};

export default createBoard;
