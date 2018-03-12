import React, { Component } from 'react'

class AddTodoForm extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            title: '',
            description: '',
            titleError: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(e){
        this.updateState(e.target.name, e.target.value)
    }

    updateState(name, value){
        this.setState(prevState => {
            let newState = Object.assign({}, prevState)
            newState[name] = value 
            return newState
        })
    }

    componentWillUpdate(nextProps){
        if(nextProps.success)
            this.props.history.push('/')
    }

    componentDidUpdate(nextProps){
        if(this.state.title && this.state.titleError){
            this.updateState('titleError', '')
        }
    }

    onSubmit(e){
        e.preventDefault()
        if(!this.state.title){
            this.updateState('titleError', 'Title cannot be empty!')
        } else {
            console.log('go')
            this.props.startAddTodo(Object.assign({}, this.state))
        }
    }
    
    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                    name="title" 
                    type="text" 
                    onChange={this.handleChange} 
                    value={this.state.title} 
                    placeholder="title"
                    autoFocus
                    autoComplete="off"/>
                    <div>{this.state.titleError}</div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea rol="6" col="6" 
                    value={this.state.description}
                    name="description"
                    onChange={this.handleChange}></textarea>
                </div>
                <input type="submit" value="Add ToDo" />
            </form>
        )
    }
}

export default AddTodoForm