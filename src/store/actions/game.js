import ActionTypes from './actionTypes'

const actions = {
    restartGame: () => ({ type: ActionTypes.RESET_GAME })
}

export default {
    onRestart: () => dispatch => dispatch(actions.restartGame())
}