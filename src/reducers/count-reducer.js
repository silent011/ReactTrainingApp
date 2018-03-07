import types from '../actions/count-types'
import actions from '../actions/count-actions'

const initialState = {
    count: 0
}

const countReducer = (state = initialState, action) => {
    let copyState = Object.assign({},state)
    switch(action.type){
        case types.INCREMENT_BY_ONE: copyState.count++;break;
        default: return copyState
    }

    return copyState
}

export default countReducer