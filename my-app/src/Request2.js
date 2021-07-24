import React from 'react'
import axios from 'axios'

class Request2 extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: [],
            error: ''
        }
    }
    componentDidMount() {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => {
                this.setState({
                    employees: response.data
                })
                // console.log(response.data);
            })
            .catch(error => {
                this.setState({
                    error: "an error ocured"
                })
            })
    }
    render() {
        // const { employees, error } = this.state
        // let data = this.state.employees.length > 0 ? this.state.employees.map((employee) => <p>{employee.employee_name}</p>) : <p>error</p>
        return (
            <React.Fragment>
                {/* {data} */}
                {this.state.employees.data && this.state.employees.data.length > 0 ? this.state.employees.data.map((item) => <p>name is :  {item.employee_name} and age is  : {item.employee_age}</p>) : <p>{this.state.error}</p>}
            </React.Fragment>
        )
    }
}


export default Request2