// Action types
import ActionTypes from 'store/actions/actionTypes'

// Utilities
import { updateState } from './utility'

const initialState = {
    gameState: 'menu',
    currentPlayer: 'player1',
    currentTile: 'X',
    firstPlayer: 'player1',
    firstTile: 'X',
    type: 'unsetted',
    difficulty: 0.5,
    placedTiles: [],
    freeTiles: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    winner: 'player1'
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

    function changeType(state, config) {
        return updateState(state, config)
    }

    function resetState() {
        return initialState
    }

    function resetGame(state) {
        const reseted = {
            currentPlayer: state.firstPlayer,
            currentTile: state.currentTile,
            placedTiles: [],
            freeTiles: [0,1,2,3,4,5,6,7,8]
        }
        return updateState(state, reseted)
    }

    switch (action.type) {
        case ActionTypes.START_GAME: return startGame(state, action.gameConfig)
        case ActionTypes.END_GAME: return endGame(state)
        case ActionTypes.CHANGE_TYPE: return changeType(state, action.config)
        case ActionTypes.RESET_STATE: return resetState()
        case ActionTypes.RESET_GAME: return resetGame(state)
        default: return state
    }
}

export default gameLogicReducer