import React from 'react'

class Example5 extends React.Component {
    constructor() {
        super()
        this.refControl = React.createRef()
        this.handleFocus = this.handleFocus.bind(this)
    }
    handleFocus() {
        this.refControl.current.focus()
    }
    render() {
        return (
            <React.Fragment>
                <input ref={this.refControl} />
                <button onClick={this.handleFocus}>focus</button>
            </React.Fragment>
        )
    }
}
export default Example5