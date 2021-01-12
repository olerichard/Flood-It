import { FC } from 'react';
import './colorButton.css';
import Tile from '../Tile';

type ColorButtonProps = {
    onClick: () => void;
    text: string;
    colors: string[];
    toggle?: boolean;
    style?: any;
};

const ColorButton: FC<ColorButtonProps> = ({ onClick, text, toggle, style, colors }) => {
    return (
        <div
            className={`colorButton ${toggle ? 'colorButtonToggle' : ''}`}
            onClick={onClick}
            style={style}
        >
            {text}
            <ul className="colors">
                {colors.map((c) => {
                    return <Tile color={c} key={c} />;
                })}
            </ul>
        </div>
    );
};

export default ColorButton;
