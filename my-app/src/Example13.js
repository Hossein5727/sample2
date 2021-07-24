import React, { useState } from 'react'

function Example13() {
    const [items, setItems] = useState([])
    const handleChange = () => {
        setItems([...items, {
            key: items.length,
            value: Math.floor(Math.random() * 300) + 1
        }])
    }
    return (
        <React.Fragment>
            <button onClick={handleChange}>Click</button>
            <ul>
                {
                    items.map(item => {
                        return (<li key={item.key}>{item.value}</li>)
                    })
                }
            </ul>
        </React.Fragment>
    )
}

export default Example13