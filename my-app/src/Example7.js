import React from 'react'
import Example6 from './Example6'
import ErrorB2 from './ErrorB2'

class Example7 extends React.Component {
    constructor() {
        super()
    }
    render(props) {
        return (
            <React.Fragment>
                <ErrorB2>
                    <Example6 myname='Hossein'></Example6>
                </ErrorB2>
            </React.Fragment>
        )
    }
}

export default Example7 