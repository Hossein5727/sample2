import React, { useState } from 'react'

function Hooks2() {
    const [name, setname] = useState({ firstname: '', lastname: '' })
    return (
        <React.Fragment>
            <input type="text" value={name.firstname} onChange={event => setname({ ...name, firstname: event.target.value })} />
            <input type="text" value={name.lastname} onChange={(event) => setname({ ...name, lastname: event.target.value })} />
            <h1> {name.firstname} {name.lastname}</h1>
        </React.Fragment>
    )
}

export default Hooks2