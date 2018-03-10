import React, { Component } from 'react'

class TodosView extends Component {
    constructor (props) {
        super(props)
        
    }
    

    componentDidMount () {
        this.props.fetchTodos()   
    }
    
    render () {
        const todos = this.props.todos
        return (
                <section className="todos-view">
                <h1>Todos:</h1>
                {todos.map(todo => (
                    <article key={todo.id} className="todo-card">
                        <h2>
                            Title: {todo.title}
                        </h2>
                        <p>{"Description:" + todo.description}</p>
                        <p>Date added: {todo.dateAdded}</p> 
                    </article>
                ))}
            </section>
        )
    }
}

export default TodosView