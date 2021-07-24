import React from 'react'

class Example8 extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Hossein'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'akram'
            })
        }, 2000);
    }
    render() {
        return (
            <React.Fragment>
                <h1>{this.state.name}</h1>
            </React.Fragment>
        )
    }
}

export default Example8