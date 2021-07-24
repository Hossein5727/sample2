import React from 'react'

class Example4 extends React.Component {
    constructor() {
        super()
        this.state = {
            counter1: 100,
        }
        this.desCounter = this.desCounter.bind(this)
    }
    desCounter() {
        this.setState((prevState) => {
            return {
                counter1: prevState.counter1 - 1
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <h1 onClick={this.desCounter}>{this.state.counter1}</h1>
            </React.Fragment>
        )
    }
}

export default Example4