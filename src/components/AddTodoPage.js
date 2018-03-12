import React, { Component } from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'

class AddTodoPage extends Component {

    render () {
        return (
            <div>
                <h1>Add Todo:</h1>
                <AddTodoContainer {...this.props} />
            </div>
        )
    }
}

export default AddTodoPage