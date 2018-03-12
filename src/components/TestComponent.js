import React, { Component } from 'react'

class Test extends Component {
    constructor (props) {
        super(props)
        
    }
    
    componentDidMount(){
        console.log('from test component', this.props)
    }

    render () {
        return (
            <div>
                This is a test component
            </div>
        )
    }
}

export default Test 