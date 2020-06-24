import ActionTypes from './actionTypes'

const actions = {
    tileClick: newTile => ({ type: ActionTypes.PLACE_TILE, newTile })
}

export default {
    tileClick: newTile => dispatch => dispatch(actions.tileClick(newTile))
}