import React from 'react'

class Rendercom extends React.Component {
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
                {this.props.render(this.desCounter, this.state.counter)}
            </React.Fragment>
        )
    }
}

export default Rendercom