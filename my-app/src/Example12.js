import React, { useState } from 'react'

function Example12() {
    const [counter, setCounter] = useState(0)
    const update = () => {
        for (let i = 0; i < 1; i++) {
            setCounter(prevState => prevState + 1)
        }
    }
    return (
        <React.Fragment>
            <button onClick={update}>Click {counter}</button>
        </React.Fragment>
    )
}

export default Example12