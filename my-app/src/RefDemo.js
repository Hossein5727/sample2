import React from 'react'


class RefDemo extends React.Component {
    constructor() {
        super()
        this.refElelm = React.createRef()
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.refElelm.current.focus()
        console.log(this.refElelm.current);
    }
    handleClick() {
        alert(this.refElelm.current.value)
    }
    render() {
        return (
            <React.Fragment>
                <input type="text" ref={this.refElelm} />
                <button onClick={this.handleClick}>send</button>
            </React.Fragment>
        )
    }
}

export default RefDemo