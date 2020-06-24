import { Action } from 'redux'

const initialState = {
    gameState: 'menu'
}

export default function gameLogicReducer(state = initialState, action: Action) {
    switch(action.type) {
        default: return state
    }
}