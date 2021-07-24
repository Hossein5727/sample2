import React, { useState } from 'react'

function Hooks3() {
    const [items, setItems] = useState([])
    const clickhandler = () => {
        setItems([...items, {
            key: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <React.Fragment>
            <button onClick={clickhandler}>Click</button>

            <ul>
                {
                    items.map(item => {
                        return (
                            <li style={{ textAlign:"center" }} key={item.key}>{item.value}</li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
}

export default Hooks3