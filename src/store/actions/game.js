import ActionTypes from './actionTypes'

const actions = {
    onGameWon: () => ({ type: ActionTypes.END_GAME, tie: false }),
    onGameTied: () => ({ type: ActionTypes.END_GAME, tie: true }),
    onChangeTurn: () => ({ type: ActionTypes.CHANGE_TURN })
}

export default {
    onGameWon: () => dispatch => dispatch(actions.onGameWon()),
    onGameTied: () => dispatch => dispatch(actions.onGameTied()),
    onChangeTurn: () => dispatch => dispatch(actions.onChangeTurn()), 
}