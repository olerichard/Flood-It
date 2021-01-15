import { FC, useState } from 'react';
import './game.css';
import Board from '../Board';
import ButtonRow from '../ColorSelector';
import TopMenu from '../TopMenu';
import WinnerSplash from '../Winnersplash';
import Settings from '../Settings';
import restartGame from '../../actions/restartGame';
import makeMove from '../../actions/makeMove';
import Game from '../../models/Game';

const Game: FC = () => {

        
    const [state, setState] = useState<Game>(restartGame());

    const settingsClick = () => setState({ ...state, showSettings: !state.showSettings });

    const restartClick = () => setState(restartGame(state));

    const saveSettingsClick = (boardSize: number, chosenColor: number, colorCount: number) =>
        setState(restartGame({ ...state, boardSize, chosenColor, colorCount }));

    const makeMoveClick = (color: number) =>
        state.gameCondition === 'running' && setState(makeMove(color, state));

    return (
        <div className="game">
            <TopMenu
                turn={state.turn}
                maxTurns={state.maxTurns}
                showSettings={state.showSettings}
                restart={restartClick}
                setting={settingsClick}
            />
            <div className="playingfield">
                {state.showSettings && (
                    <Settings gameState={state} saveSettings={saveSettingsClick} />
                )}

                {!state.showSettings && (
                    <Board board={state.board} colors={state.colorTemplates[state.chosenColor]} />
                )}

                {state.gameCondition !== 'running' && (
                    <WinnerSplash gameResult={state.gameCondition} restart={restartClick} />
                )}
            </div>
            <ButtonRow
                colorCount={state.colorCount}
                colors={state.colorTemplates[state.chosenColor]}
                makeMove={makeMoveClick}
            />
        </div>
    );
};

export default Game;
