// Action types
import ActionTypes from 'store/actions/actionTypes'

// Utilities
import { updateState } from './utility'

const initialState = {
    gameState: 'menu',
    currentPlayer: 1,
    currentTile: 'X',
    type: 'pvp',
    scoreboardPvp: {
        player1: 0,
        player2: 0
    },
    scoreboardPve: {
        player: 0,
        computer: 0
    },
    difficulty: 0.5,
    placedTiles: [],
    freeTiles: [0,1,2,3,4,5,6,7,8],
    winner: 1
}

function gameLogicReducer(state = initialState, action) {
    
    function startGame(state, gameConfig) {
        return updateState(state, gameConfig)
    }

    function endGame(state) {
        return updateState(state, {
            gameState: 'results',
            winner: state.currentPlayer
        })
    }

    switch(action.type) {
        case ActionTypes.START_GAME: return startGame(state, action.gameConfig)
        case ActionTypes.END_GAME: return endGame(state)
        default: return state
    }
}

export default gameLogicReducer