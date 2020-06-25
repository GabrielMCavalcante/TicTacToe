import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import GameLogicReducer from 'store/reducers/game-logic'
import * as gameCreators from 'store/actions/game'

const composeEnhancers = composeWithDevTools({ gameCreators, trace: true, traceLimit: 25 })

const store = createStore(GameLogicReducer, composeEnhancers(applyMiddleware(thunk)))
export default store