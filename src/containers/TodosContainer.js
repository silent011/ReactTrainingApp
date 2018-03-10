import { connect } from 'react-redux'
import TodosView from '../components/TodosView'
import { fetchTodos } from '../actions/toDoActions'

const mapStateToProps = state => ({
    todos: state.todosStore.todos
})

const mapDispatchToProps = dispatch => ({
    fetchTodos: () => dispatch(fetchTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosView)