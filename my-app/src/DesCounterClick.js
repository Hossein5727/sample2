import React from 'react'

class DesCounterClick extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 100,
        }
        this.desCounter = this.desCounter.bind(this)
    }
    desCounter() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={this.desCounter}>Click: {this.state.counter}</button>
                <p>{this.state.counter}</p>
            </React.Fragment>
        )
    }
}

export default DesCounterClick