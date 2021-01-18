import { FC } from 'react';
import './board.css';
import Tile from '../Tile';
import Boards from '../../models/Board';

type BoardProps = {
    board: Boards;
};

const Board: FC<BoardProps> = ({ board }) => {
    return (
        <div className="board" key="board">
            {board.map((line, lineIndex) => {
                return (
                    <ul className={`line`} key={`BoardLine${lineIndex}`}>
                        {line.map((t, rowIndex) => {
                            return (
                                <Tile color={t.color} key={`BoardLine${lineIndex}Row${rowIndex}`} />
                            );
                        })}
                    </ul>
                );
            })}
        </div>
    );
};

export default Board;
