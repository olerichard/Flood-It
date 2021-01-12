import { FC } from 'react';
import 'font-awesome/css/font-awesome.css';
import './topMenu.css';

type TopMenuProps = {
    turn: number;
    maxTurns: number;
    restart: () => void;
    setting: () => void;
    showSettings?: boolean;
};

const TopMenu: FC<TopMenuProps> = ({ turn, maxTurns, showSettings, restart, setting }) => {
    const menuStyle = showSettings ? { background: '#AF4175' } : {};

    return (
        <div className="topMenu">
            <div className="score">
                {' '}
                {turn.toString().padStart(maxTurns.toString().length, '0')}/{maxTurns}
            </div>
            <div className="menuButtons">
                <div id="refresh" className="menuButton">
                    <i className="fa fa-refresh" onClick={restart}></i>
                </div>
                <div id="settings" className="menuButton" style={menuStyle}>
                    <i className="fa fa-navicon" onClick={setting}></i>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;
