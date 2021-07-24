import React from 'react'

class List extends React.Component {
    constructor() {
        super()
    }
    render(props) {
        return (
            <React.Fragment>
                <li>{this.props.name}</li>
            </React.Fragment>
        )
    }
}
export default List