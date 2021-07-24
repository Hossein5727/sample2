import React, { useState } from 'react'

function CounterHook() {
    const [counter, setcounter] = useState(0)
    const update = () => {
        setcounter(prevState => prevState + 1)
    }
    return (
        <button onClick={update}>Click {counter}</button>
    )
}

export default CounterHook