import { FC } from 'react';
import './Tile.css';

type TileProps = {
    color: string;
};

const Tile: FC<TileProps> = ({ color }) => {
    return <li className={'tile'} style={{ backgroundColor: color }}></li>;
};

export default Tile;
