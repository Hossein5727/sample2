import React from 'react'

class Example6 extends React.Component {
    constructor() {
        super()
    }
    render(props) {
        if (this.props.myname === 'Hossein') {
            throw new Error("kirr 😑")
        }
        return (
            <React.Fragment>
                <h1 >{this.props.myname}</h1>
            </React.Fragment>
        )
    }
}

export default Example6 