// Action types
import ActionTypes from 'store/actions/actionTypes'

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
    tie: false,
    playerPlayed: false
}

function gameLogicReducer(state = initialState, action) {

    function updateState(oldState, newValues) {
        return { ...oldState, ...newValues }
    }

    function startGame(state, gameConfig) {
        return updateState(state, gameConfig)
    }

    function endGame(state, tie) {
        return updateState(state, { gameState: 'results', tie })
    }

    function resetGame(state) {
        const reseted = {
            currentPlayer: state.firstPlayer,
            currentTile: state.firstTile,
            placedTiles: [],
            freeTiles: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            tie: false,
            playerPlayed: false
        }
        return updateState(state, reseted)
    }

    function resetState() {
        return initialState
    }

    function placeTile(state, newTile) {
        const updatedFreeTiles = state.freeTiles.filter(tile => tile !== newTile.id)

        const updatedPlacedTiles = [...state.placedTiles, newTile]

        const update = {
            freeTiles: updatedFreeTiles,
            placedTiles: updatedPlacedTiles
        }

        return updateState(state, update)
    }

    function changeType(state, config) {
        return updateState(state, config)
    }

    function changeDifficulty(state, diff) {
        return updateState(state, { difficulty: diff })
    }

    function changeTurn(state) {
        let nextPlayer = 'player'

        if (state.type === 'pvp')
            nextPlayer = state.currentPlayer === 'player1' ? 'player2' : 'player1'
        else if (state.type === 'pve')
            nextPlayer = state.currentPlayer === 'player' ? 'computer' : 'player'

        const shiftedTurn = {
            currentTile: state.currentTile === 'X' ? 'O' : 'X',
            currentPlayer: nextPlayer
        }

        return updateState(state, shiftedTurn)
    }

    function changeGamestate(state, newGamestate) {
        return updateState(state, { gameState: newGamestate })
    }

    function changePlayerPlayed(state, played) {
        return updateState(state, { playerPlayed: played })
    }

    switch (action.type) {
        case ActionTypes.START_GAME: return startGame(state, action.gameConfig)
        case ActionTypes.END_GAME: return endGame(state, action.tie)
        case ActionTypes.RESET_GAME: return resetGame(state)
        case ActionTypes.RESET_STATE: return resetState()
        case ActionTypes.PLACE_TILE: return placeTile(state, action.newTile)
        case ActionTypes.CHANGE_TYPE: return changeType(state, action.config)
        case ActionTypes.CHANGE_DIFFICULTY: return changeDifficulty(state, action.diff)
        case ActionTypes.CHANGE_TURN: return changeTurn(state)
        case ActionTypes.CHANGE_GAMESTATE: return changeGamestate(state, action.newGamestate)
        case ActionTypes.CHANGE_PLAYER_PLAYED: return changePlayerPlayed(state, action.played)
        default: return state
    }
}

export default gameLogicReducer