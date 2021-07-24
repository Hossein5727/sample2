import React from 'react'

class DesCounterHover extends React.Component {
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
                <h1 onMouseOver={this.desCounter}>Click: {this.state.counter}</h1>
                <p>{this.state.counter}</p>
            </React.Fragment>
        )
    }
}

export default DesCounterHover



// const mame = HigherOrderCopmponent(OriginalCopmponent)