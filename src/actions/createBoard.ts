import Board from '../models/Board';
import Tile from '../models/Tile';

export default function createBoard(rows: number, tilesPerRow: number, colorCount: number): Board {
    return Array(rows)
        .fill('')
        .map(() =>
            Array(tilesPerRow)
                .fill('')
                .map(() => tileColor(colorCount))
        );
}

function tileColor(colorCount: number): Tile {
    return {
        color: Math.floor(Math.random() * colorCount),
        collected: false,
    };
}
