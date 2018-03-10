import {types} from '../actions/toDoActions'

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_TODO_LOCAL: {
            let newState = Object.assign({}, state)
            newState.todos.push(action.payload)
            return newState
        }
        case types.FETCHED_TODOS: {
            let newState = Object.assign({}, state) 
            const payload = Object.entries(action.payload)
            let todos = []
            payload.forEach(([key, {title, description, dateAdded}]) =>{
                let res = {id: key, title, description, dateAdded }
                todos.push(res)
            })
            
            newState.todos = todos
            return newState
        }
        default: return state;
    }
}

export default todoReducer