import React from 'react'


class RefDemo2 extends React.Component {
    constructor() {
        super()
        this.ref1 = React.createRef()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.ref1.current.focus()
    }
    render() {
        return (
            <React.Fragment>
                <input type="text" ref={this.ref1} />
                <button onClick={this.handleClick}>focus</button>
            </React.Fragment>
        )
    }
}

export default RefDemo2