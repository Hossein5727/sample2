import React from 'react'

class Example9 extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <div>{this.props.name(false)}</div>
            </React.Fragment>
        )
    }
}

export default Example9