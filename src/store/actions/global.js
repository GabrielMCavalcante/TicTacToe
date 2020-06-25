import ActionTypes from './actionTypes'

const actions = {
    restartGame: () => ({ type: ActionTypes.RESET_GAME }),
    resetState: () => ({ type: ActionTypes.RESET_STATE }),
    changeGamestate: newGamestate => ({ type: ActionTypes.CHANGE_GAMESTATE, newGamestate }),
    changePlayerPlayed: played => ({ type: ActionTypes.CHANGE_PLAYER_PLAYED, played })
}

export default {
    onRestart: () => dispatch => dispatch(actions.restartGame()),
    onReturnToMenu: () => dispatch => dispatch(actions.resetState()),
    onChangeGamestate: newGamestate => dispatch => dispatch(actions.changeGamestate(newGamestate)),
    onChangePlayerPlayed: played => dispatch => dispatch(actions.changePlayerPlayed(played))
}