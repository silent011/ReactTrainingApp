import { connect } from 'react-redux'
import AddTodoForm from '../components/AddTodoForm'
import { startAddTodo } from '../actions/toDoActions'

const mapStateToProps = (state) => ({
    success: state.todosStore.ajaxResponse.success
})

const mapDispatchToProps = (dispatch) => ({
    startAddTodo:(todo) => dispatch(startAddTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)