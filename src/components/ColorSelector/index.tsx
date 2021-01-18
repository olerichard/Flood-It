import { FC } from 'react';
import './colorSelector.css';

type ColorSelectorProps = {
    colorCount: number;
    colors: string[];
    makeMove: (color: string) => void;
};

const ColorSelector: FC<ColorSelectorProps> = ({ colorCount, colors, makeMove }) => {
    return (
        <ul className="colorSelector" style={{ gridTemplateColumns: `repeat(${colorCount},50px)` }}>
            {colors.slice(0, colorCount).map((color, index) => (
                <li
                    key={'colorSelectButton' + index}
                    className={'colorSelectButton'}
                    style={{ backgroundColor: color }}
                    onClick={() => makeMove(color)}
                ></li>
            ))}
        </ul>
    );
};

export default ColorSelector;
