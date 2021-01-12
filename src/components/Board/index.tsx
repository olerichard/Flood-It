import { FC } from 'react';
import './board.css';
import Tile from '../Tile';
import Boards from '../../models/Board';

type BoardProps = {
    board: Boards;
    colors: string[];
};

const Board: FC<BoardProps> = ({ board, colors }) => {
    return (
        <div className="board" key="board">
            {board.map((line, lineIndex) => {
                return (
                    <ul className={`line`} key={`BoardLine${lineIndex}`}>
                        {line.map((t, rowIndex) => {
                            return (
                                <Tile
                                    color={colors[t.color]}
                                    key={`BoardLine${lineIndex}Row${rowIndex}`}
                                />
                            );
                        })}
                    </ul>
                );
            })}
        </div>
    );
};

export default Board;
