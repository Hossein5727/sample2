import React, { useReducer, useState } from 'react'

const initialValue = 0
const initialValue2 = 10

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
    }
}

const reducer2 = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 10
        case 'decrement':
            return state - 10
    }
}

function Reduser1() {
    const [count, dispath] = useReducer(reducer, initialValue)
    const [count2, dispath2] = useReducer(reducer2, initialValue2)
    return (
        <React.Fragment>
            <h2>count {count}</h2>
            <button onClick={() => dispath('increment')}>increment</button>
            <button onClick={() => dispath('decrement')}>decrement</button>

            <h2>count {count2}</h2>
            <button onClick={() => dispath2('increment')}>increment</button>
            <button onClick={() => dispath2('decrement')}>decrement</button>
        </React.Fragment>
    )
}

export default Reduser1