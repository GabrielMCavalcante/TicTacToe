import ActionTypes from './actionTypes'

const actions = {
    setPvp: () => ({
        type: ActionTypes.CHANGE_TYPE,
        config: { type: 'pvp', gameState: 'pvpConfig' }
    }),

    setPve: () => ({
        type: ActionTypes.CHANGE_TYPE,
        config: { type: 'pve', gameState: 'pveConfig' }
    })
}

export default {
    onSetPvp: () => dispatch => dispatch(actions.setPvp()),
    onSetPve: () => dispatch => dispatch(actions.setPve())
}