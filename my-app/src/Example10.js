import React from 'react'
import Example9 from './Example9'
import Rendercom from './Rendercom'
import Renderprops from './Renderprops'

class Example10 extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <Example9 name={(isloggdin) => isloggdin ? <button>Hossein</button> : <button>guest</button>} />
                <Rendercom render={(tob1, tob2) => <Renderprops desCounter={tob1} counter={tob2} />} />
            </React.Fragment>
        )
    }
}

export default Example10