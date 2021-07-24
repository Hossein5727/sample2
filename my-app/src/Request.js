import React from 'react'

class Request extends React.Component {
    constructor() {
        super()
        this.state = {
            emplu: []
        }
    }
    componentDidMount() {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    emplu: data
                })
                console.log(this.state);
            })
    }
    render() {
        let data = this.state.emplu.data && this.state.emplu.data.length > 0 ? this.state.emplu.data.map((emp) => <p>{emp.employee_name}</p>) : <p>error</p>
        return (
            <div>
                {data}
                {/* {this.state.emplu.data && this.state.emplu.data.length > 0 ? data : <p>error</p>} */}
            </div>
        )
    }
}
export default Request