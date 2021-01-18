import { FC } from 'react';
import './button.css';

type ButtonProps = {
    click: () => void;
    text: string;
    toggle?: boolean;
    style?: React.CSSProperties;
};

const Button: FC<ButtonProps> = ({ click, text, toggle, style }) => {
    return (
        <div className={`button ${toggle ? 'buttonToggle' : ''}`} onClick={click} style={style}>
            {text}
        </div>
    );
};

export default Button;
