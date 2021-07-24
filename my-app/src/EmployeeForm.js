import React from 'react'
import axios from 'axios'

class EmployeeForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            salary: '',
            age: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        axios.post('http://dummy.restapiexample.com/api/v1/create', this.state)
            .then(response => {
                if (response.status === 200) {
                    alert('sucsses')
                }
            }
            )
            .catch(error => console.log(error))
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} /><br />
                    <input type="text" name="salary" onChange={this.handleChange} value={this.state.salary} /><br />
                    <input type="text" name="age" onChange={this.handleChange} value={this.state.age} /><br />
                    <button type="submit">Send</button>
                </form>
            </React.Fragment>
        )
    }
}
export default EmployeeForm