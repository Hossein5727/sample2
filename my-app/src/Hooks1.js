import React, { setState, useState } from 'react'

function Hooks1() {
    const [counter, setCounter] = useState(0)
    const UpdateFive = () => {
        for (let i = 1; i < 6; i++) {
            setCounter(prevState => prevState + 1)
        }
    }
    return (
        <button onClick={UpdateFive} > click { counter}</button >
    )
}

export default Hooks1