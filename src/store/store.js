import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import countReducer from '../reducers/count-reducer'
import todoReducer from '../reducers/todo-reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers(
        {count: countReducer,
        todosStore: todoReducer}
    ),
    composeEnhancers(applyMiddleware(thunk))
)

export default store