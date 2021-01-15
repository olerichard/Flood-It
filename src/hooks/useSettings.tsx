import { useState } from 'react';
import Settings from '../models/Settings';
import { templateNames } from './useColorTemplates';

const initialSettings: Settings = {
    showSettings: false,
    boardSize: 10,
    template: 'pastel',
    colorCount: 5,
    difficulty: 1,
};

const useSettings = () => {
    const [settings, setSettings] = useState<Settings>({ ...initialSettings });

    const setSetting = (setting: keyof Settings, value: templateNames | boolean | number) =>
        setSettings((prevState) => ({ ...prevState, [setting]: value }));

    const resetSettings = () => setSettings({ ...initialSettings });

    return { settings, setSetting, resetSettings };
};

export default useSettings;
