import React, { useEffect, useState } from 'react'

function Example14() {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        document.title = counter
    })
    const update = () => {
        for (let i = 0; i < 5; i++) {
            setCounter(prevState =>
                prevState + 1
            )
        }
    }
    return (
        <React.Fragment>
            <button onClick={update}>Click {counter}</button>
        </React.Fragment >
    )
}
export default Example14