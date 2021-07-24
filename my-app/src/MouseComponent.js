import React from 'react'

class MouseComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            x: 0,
            y: 0
        }
        this.movehandler = this.movehandler.bind(this)
    }
    movehandler(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        })
        if (e.clientX == 637) {
            alert("SEX")
        }
    }
    componentDidMount() {
        document.addEventListener('mousemove', this.movehandler)
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.movehandler)
    }
    render() {
        return (
            <React.Fragment>
                <h1>x: {this.state.x} - y: {this.state.y}</h1>
            </React.Fragment>
        )
    }
}

export default MouseComponent