import { createStore, combineReducers } from 'redux'
import countReducer from '../reducers/count-reducer'

const store = createStore(
    combineReducers({count: countReducer})
)

export default store