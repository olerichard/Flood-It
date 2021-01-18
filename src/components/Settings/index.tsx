import { FC, useState } from 'react';
import './settings.css';
import Button from '../Button';
import ColorButton from '../ColorButton';
import InputRange from 'react-input-range';
import useColorTemplates from '../../hooks/useColorTemplates';
import { UseSettings } from '../../hooks/useSettings';
import SettingsType from '../../models/SettingsType';

type SettingsProps = {
    settings: UseSettings;
};

const Settings: FC<SettingsProps> = ({ settings }) => {
    const { activeSettings, changeSettings, toggleSettings } = settings;

    const [selectedSettings, setSelectedSettings] = useState<SettingsType>({ ...activeSettings });

    function changeSelectedSetting<K extends keyof SettingsType>(
        setting: K,
        value: SettingsType[K]
    ) {
        setSelectedSettings((settings) => ({ ...settings, [setting]: value }));
    }

    const getColorTemplate = useColorTemplates().getTemplate;

    return (
        <div className="settings">
            <div className="boardSize columns">
                <div className="boardSizeHeader">BOARD SIZE</div>
                <div className="boardSizeSettings">
                    <Button
                        text="5"
                        toggle={selectedSettings.boardSize === 5}
                        click={() => changeSelectedSetting('boardSize', 5)}
                    />
                    <Button
                        text="10"
                        toggle={selectedSettings.boardSize === 10}
                        click={() => changeSelectedSetting('boardSize', 10)}
                    />
                    <Button
                        text="20"
                        toggle={selectedSettings.boardSize === 20}
                        click={() => changeSelectedSetting('boardSize', 20)}
                    />
                </div>
            </div>

            <div className="colorScheme columns">
                <div className="colorSchemeHeader">COLORS</div>
                <div className="colorSchemeSettings">
                    <ColorButton
                        text=""
                        toggle={selectedSettings.template === 'pastel'}
                        colors={getColorTemplate('pastel')}
                        onClick={() => changeSelectedSetting('template', 'basic')}
                    />
                    <ColorButton
                        text=""
                        toggle={selectedSettings.template === 'basic'}
                        colors={getColorTemplate('basic')}
                        onClick={() => changeSelectedSetting('template', 'basic')}
                    />
                </div>
            </div>

            <div className="colorCount">
                <div className="colorCountHeader">COLOR COUNT</div>
                <div className="colorCountRange">
                    <InputRange
                        maxValue={7}
                        minValue={3}
                        value={selectedSettings.colorCount}
                        onChange={(value) => {
                            changeSelectedSetting('colorCount', value as number);
                        }}
                    />
                </div>
            </div>

            <div className="save columns">
                <Button
                    text="SAVE"
                    click={() => {
                        changeSettings(selectedSettings);
                        toggleSettings();
                    }}
                />
            </div>
        </div>
    );
};
export default Settings;
