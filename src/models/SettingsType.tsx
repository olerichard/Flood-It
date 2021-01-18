import { templateNames } from '../hooks/useColorTemplates';

type SettingsType = {
    boardSize: number;
    template: templateNames;
    colorCount: number;
    difficulty: number;
    showSettings: boolean;
};

export default SettingsType;
