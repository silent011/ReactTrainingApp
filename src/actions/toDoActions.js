import db from '../firebase/firebase'
import { database } from 'firebase';

export const types = {
    ADDED_TODO: 'ADDED_TODO',
    FETCHED_TODOS: 'FETCHED_TODOS',
    CLEAR_RESP_MESSAGE:'CLEAR_RESP_MESSAGE' 
}

export const addedTodo = (response) => ({
    type: types.ADDED_TODO,
    payload: response
})

export const clearRespMessage = () => ({
    type: types.CLEAR_RESP_MESSAGE
})

export const startAddTodo = (todoData = {}) => {
    return (dispatch) => {
        const {
            title = '',
            description = '',
            dateAdded = new Date().getTime()
        } = todoData

        const toDo = {title, description, dateAdded}
        db.ref('todos').push(toDo).then((ref) => {
            dispatch(addedTodo({
                success: true,
                msg: 'Successfully added Todo!'
            }))
        }).catch(error => {
            dispatch(addedTodo({
                success: false,
                msg: 'Failed to add todo :('
            }))
            console.log('firebase error', error)
        })
    }
}

export const fetchTodos = () => {
    return dispatch => {
        db.ref('todos').once('value').then((snapshot) => {
            dispatch({
                type:types.FETCHED_TODOS,
                payload: snapshot.val()
            })
            // console.log('snapshot', snapshot.val())
        }).catch(e => {
            console.log('fetching error', e)
        })
    }
}
