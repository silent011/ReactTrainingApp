import db from '../firebase/firebase'
import { database } from 'firebase';

export const types = {
    ADD_TODO_LOCAL: 'ADD_TODO_LOCAL',
    FETCHED_TODOS: 'FETCHED_TODOS'
}

export const addTodo = (todo) => ({
    type: types.ADD_TODO_LOCAL,
    payload: todo
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
            dispatch(addTodo({ 
                id:ref.key,
                title, 
                description,
                dateAdded,
            }))
        }).catch(error => {
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
