import GameState from '../models/GameState';

const initialState = (): GameState => ({
    turn: 0,
    maxTurns: 0,
    showSettings: false,
    board: [],
    boardSize: 5,
    colorTemplates: [
        ['red', 'blue', 'orange', 'purple', 'yellow', 'brown', 'green'],
        ['#FC726D', '#2E4F6D', '#35AE57', '#F7931E', '#FFCE55', '#AF4175', '#29CCC0'],
    ],
    chosenColor: 1,
    colorCount: 5,
    difficulty: 3,
    gameCondition: 'running',
});

export default initialState;
