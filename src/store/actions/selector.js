import ActionTypes from './actionTypes'

const actions = {
    setDifficulty: diff => ({ type: ActionTypes.CHANGE_DIFFICULTY, diff })
}

export default {
    onSetDifficulty: diff => dispatch => dispatch(actions.setDifficulty(diff))
}