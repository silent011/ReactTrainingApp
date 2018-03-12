import React from 'react'
import CounterContainer from '../containers/Counter'
import TodosContainer from '../containers/TodosContainer'

let Home = (props) => (
    <div>
        <CounterContainer />
        <TodosContainer />
    </div>
)

export default Home