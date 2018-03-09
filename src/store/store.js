import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import countReducer from '../reducers/count-reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({count: countReducer}),
    composeEnhancers(applyMiddleware(thunk))
)

export default store