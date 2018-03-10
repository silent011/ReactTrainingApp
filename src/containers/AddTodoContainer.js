import { connect } from 'react-redux'
import AddTodoForm from '../components/AddTodoForm'
import { startAddTodo } from '../actions/toDoActions'

const mapDispatchToProps = (dispatch) => ({
    startAddTodo:(todo) => dispatch(startAddTodo(todo))
})

export default connect(null, mapDispatchToProps)(AddTodoForm)