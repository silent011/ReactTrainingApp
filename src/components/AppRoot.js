import React, { Component } from 'react'
import 'normalize.css'
import '../styles/styles.scss'

class AppRoot extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }

        this.inc = this.inc.bind(this)
    }

    inc(){
        this.setState(prevState => {
            let newState = Object.assign({}, prevState)
            newState.count++
            return newState
        })
    }
    render () {
        return (
            <div>
                <header className="header">
                <h1 className="header__title">Hello this is the root component</h1>
                </header>
                
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.inc}>Increment</button>
            </div>
        )
    }
}

export default AppRoot