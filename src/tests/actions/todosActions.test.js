import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddTodo, fetchTodos } from '../../actions/toDoActions'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should add a todo to database', (done) => {
    const store = createMockStore({})
    const expense = {
        description: 'test description',
        title: 'test title'
    }

    store.dispatch(startAddTodo(expense)).then(ref =>{
         database.ref(`todos/${ref.key}`).once('value').then((snapshot) => {
            const {dateAdded,title, description} = snapshot.val()
            expect({title, description}).toEqual(expense)
            expect(typeof dateAdded).toBe('number')
            done()
        })
    })
})

test('should read from database', (done) => {
    const store = createMockStore({})

    store.dispatch(fetchTodos()).then(() => {
        const actions = store.getActions()
        expect(actions.length).toBe(1)

        const action = actions[0]
        expect(action.type).toBe('FETCHED_TODOS')
        expect(typeof action.payload).toBe('object')
        expect(Object.keys(action.payload).length).toBeGreaterThan(0)
        done()
    })
})