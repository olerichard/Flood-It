import './winnersplash.css';
import Button from '../Button';
import { FC } from 'react';
import { GameCondition } from '../../models/GameState';

type gameResult = Exclude<GameCondition, 'running'>;

type WinnerSplashProps = {
    gameResult: gameResult;
    restart: () => void;
};

const WinnerSplash: FC<WinnerSplashProps> = ({ gameResult, restart }) => {
    return (
        <div className="splash">
            <p className="conditionText">
                {gameResult === 'won' ? 'You have won the game!' : 'You are out of moves!'}
            </p>
            <Button click={restart} text="Play Again!" />
        </div>
    );
};

export default WinnerSplash;
