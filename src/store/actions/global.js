import ActionTypes from './actionTypes'

const actions = {
    resetState: () => ({ type: ActionTypes.RESET_STATE })
}

export default {
    onReturnToMenu: () => dispatch => dispatch(actions.resetState())
}