import { FC, useState } from 'react';
import './settings.css';
import Button from '../Button';
import ColorButton from '../ColorButton';
import InputRange from 'react-input-range';
import GameState from '../../models/Game';

type SettingsProps = {
    gameState: GameState;
    saveSettings: (boardSize: number, chosenColor: number, colorCount: number) => void;
};

const Settings: FC<SettingsProps> = ({
    gameState: { boardSize, chosenColor, colorCount, colorTemplates },
    saveSettings,
}) => {
    const [selectedBoardSize, setBoardSize] = useState(boardSize);
    const [selectedChosenColor, setChosenColor] = useState(chosenColor);
    const [selectedColorCount, setColorCount] = useState(colorCount);

    return (
        <div className="settings">
            <div className="boardSize columns">
                <div className="boardSizeHeader">BOARD SIZE</div>
                <div className="boardSizeSettings">
                    <Button
                        text="5"
                        toggle={selectedBoardSize === 5}
                        click={() => setBoardSize(5)}
                    />
                    <Button
                        text="10"
                        toggle={selectedBoardSize === 10}
                        click={() => setBoardSize(10)}
                    />
                    <Button
                        text="20"
                        toggle={selectedBoardSize === 20}
                        click={() => setBoardSize(20)}
                    />
                </div>
            </div>

            <div className="colorScheme columns">
                <div className="colorSchemeHeader">COLORS</div>
                <div className="colorSchemeSettings">
                    <ColorButton
                        text=""
                        toggle={selectedChosenColor === 1}
                        colors={colorTemplates[1]}
                        onClick={() => setChosenColor(1)}
                    />
                    <ColorButton
                        text=""
                        toggle={selectedChosenColor === 0}
                        colors={colorTemplates[0]}
                        onClick={() => setChosenColor(0)}
                    />
                </div>
            </div>

            <div className="colorCount">
                <div className="colorCountHeader">COLOR COUNT</div>
                <div className="colorCountRange">
                    <InputRange
                        maxValue={7}
                        minValue={3}
                        value={selectedColorCount}
                        onChange={(value) => {
                            setColorCount(value as number);
                        }}
                    />
                </div>
            </div>

            <div className="save columns">
                <Button
                    text="SAVE"
                    click={() =>
                        saveSettings(selectedBoardSize, selectedChosenColor, selectedColorCount)
                    }
                />
            </div>
        </div>
    );
};
export default Settings;
