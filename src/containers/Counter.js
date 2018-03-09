import React from 'react'
import CounterView from '../components/Counter'
import { connect } from 'react-redux'
import { incrementByOne } from '../actions/count-actions'

let custom = {
    message: 'Hello from ownProps'
}


let mapStateToProps = (state, ownProps) => {
    return {
        count: state.count.count,
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