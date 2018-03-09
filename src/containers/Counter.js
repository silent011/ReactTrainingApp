import React from 'react'
import CounterView from '../components/Counter'
import { connect } from 'react-redux'
import { incrementByOne } from '../actions/count-actions'

let custom = {
    message: 'Hello from ownProps2'
}


let mapStateToProps = (state, ownProps) => {
    console.log('own props', ownProps)
    return {
        count: Object.assign({}, state.count),
        message: custom.message
    }
}

let mapDispatchToProps = dispatch => {
    return {
        inc: () => { dispatch(incrementByOne()) }
    }
}



let Counter = connect(mapStateToProps, mapDispatchToProps)(CounterView)

export default Counter