import React from 'react'

let Counter = ({count, inc, message}) => {
    console.log('count',count)
   return <div>
        <h2>Counter page:</h2>
        <h2 id="count-value">Count: {count}</h2>
        <button onClick={inc}>Increment</button>   
        <h3>{message}</h3>   
    </div>
}

export default Counter