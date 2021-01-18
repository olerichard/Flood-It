import { FC } from 'react';
import './game.css';
import Board from '../Board';
import ButtonRow from '../ColorSelector';
import TopMenu from '../TopMenu';
import WinnerSplash from '../Winnersplash';
import Settings from '../Settings';
import useSettings from '../../hooks/useSettings';
import useGame from '../../hooks/useGame';

const Game: FC = () => {
    const settings = useSettings();
    const { activeSettings, toggleSettings } = settings;
    const { game, resetGame, makeMove } = useGame(activeSettings);

    return (
        <div className="game">
            <TopMenu
                turn={game.turn}
                maxTurns={game.maxTurns}
                showSettings={activeSettings.showSettings}
                restart={resetGame}
                setting={toggleSettings}
            />
            <div className="playingfield">
                {activeSettings.showSettings ? (
                    <Settings settings={settings} />
                ) : (
                    <Board board={game.board} />
                )}
                {game.gameCondition !== 'running' && (
                    <WinnerSplash gameResult={game.gameCondition} restart={resetGame} />
                )}
            </div>
            <ButtonRow
                colorCount={settings.activeSettings.colorCount}
                colors={game.colors}
                makeMove={makeMove}
            />
        </div>
    );
};

export default Game;
