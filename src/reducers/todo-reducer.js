import {types} from '../actions/toDoActions'

const initialState = {
    todos: [],
    ajaxCall: false,
    ajaxResponse: {
        success: false,
        msg: ''
    }
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADDED_TODO: {
            let newState = Object.assign({}, state, 
                {ajaxResponse: action.payload, ajaxCall: false})
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
        case types.CLEAR_RESP_MESSAGE: {
            let newState = Object.assign({}, state, 
                {ajaxResponse: initialState.ajaxResponse})
            return newState
        }
        default: return state;
    }
}

export default todoReducer