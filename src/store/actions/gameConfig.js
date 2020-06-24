import ActionTypes from './actionTypes'

const actions = {
    setGameConfig: config => ({ type: ActionTypes.START_GAME, gameConfig: config })
}

export default {
    onSetGameConfig: config => dispatch => dispatch(actions.setGameConfig(config))
}