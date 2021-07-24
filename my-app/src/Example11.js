import React from 'react'

class Example11 extends React.Component {
    constructor() {
        super()
        this.ref1 = React.createRef()
    }
    componentDidMount() {
        this.ref1.current.style.width = "400px"
        console.log(this.ref1);
    }
    render() {
        return (
            <React.Fragment>
                <input type="text" ref={this.ref1} />
            </React.Fragment>
        )
    }
}

export default Example11