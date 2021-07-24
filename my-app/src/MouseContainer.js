import React from 'react'
import MouseComponent from './MouseComponent'


class MouseContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            display: true
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.display && <MouseComponent />}
                <button onClick={() => this.setState({ display: false })}>Hide</button>
            </React.Fragment>
        )
    }
}

export default MouseContainer