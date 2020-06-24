import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import GameLogicReducer from 'store/reducers/game-logic'
const store = createStore(GameLogicReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store