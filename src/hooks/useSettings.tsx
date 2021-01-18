import { useState } from 'react';
import SettingsType from '../models/SettingsType';

const defaultSettings: SettingsType = {
    boardSize: 10,
    template: 'pastel',
    colorCount: 5,
    difficulty: 3,
    showSettings: false,
};

export type UseSettings = {
    activeSettings: SettingsType;
    changeSetting: <K extends keyof SettingsType>(setting: K, value: SettingsType[K]) => void;
    changeSettings: (settings: SettingsType) => void;
    resetToDefaultSettings: () => void;
    toggleSettings: () => void;
};

const useSettings = (initialSettings?: SettingsType): UseSettings => {
    const [activeSettings, setActiveSettings] = useState<SettingsType>({
        ...(initialSettings ?? defaultSettings),
    });

    function changeSetting<K extends keyof SettingsType>(setting: K, value: SettingsType[K]) {
        setActiveSettings((settings) => ({ ...settings, [setting]: value }));
    }

    const changeSettings = (settings: SettingsType) => setActiveSettings(settings);

    const resetToDefaultSettings = () => setActiveSettings({ ...defaultSettings });

    const toggleSettings = () => {
        setActiveSettings((settings) => ({ ...settings, showSettings: !settings.showSettings }));
    };

    return {
        activeSettings,
        changeSetting,
        changeSettings,
        resetToDefaultSettings,
        toggleSettings,
    };
};

export default useSettings;
