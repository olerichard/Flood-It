import { templateNames } from '../hooks/useColorTemplates';

type Settings = {
    showSettings: boolean;
    boardSize: number;
    template: templateNames;
    colorCount: number;
    difficulty: number;
};

export default Settings;
