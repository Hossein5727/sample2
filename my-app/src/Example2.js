import React from 'react'

class Example2 extends React.Component {
    constructor() {
        super()
        this.state = {
            // typeinput: 'radio'
            ch1: false,
            type1: "radio",
            name1: "radio1"
        }
        // this.handlechange = this.handlechange.bind(this)
    }
    // handlechange(event) {
    //     this.setState({
    //         ch1: event.target.checked
    //     })
    // }
    render(props) {
        return (
            < React.Fragment >
                {/* checked={this.state.ch1} onChange={this.handlechange}  */}
                <input type={this.state.type1} name={this.state.name1} />
                <input type={this.state.type1} name={this.state.name1} />
                <input type={this.state.type1} name={this.state.name1} />
            </React.Fragment >
        )
    }
}
export default Example2