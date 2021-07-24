import React from 'react'

class Renderprops extends React.Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={this.props.desCounter}>Click: {this.props.counter}</button>
                <p>{this.props.counter}</p>
            </React.Fragment>
        )
    }
}

export default Renderprops