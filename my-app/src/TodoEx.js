import React from 'react'
import List from './List'
import { v4 as uuidv4 } from 'uuid'

class TodoEx extends React.Component {
    constructor() {
        super()
        this.state = {
            tempinput: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            tempinput: event.target.value
        })
    }
    handleSubmit(event) {
        let newtemp = {
            value: this.state.tempinput,
            key: uuidv4()
        }
        let templist = []
        if (this.state.list) {
            templist = this.state.list
        }
        templist.push(newtemp)
        this.setState({
            list: templist,
            tempinput: ''
        })
        alert("add  your item   " + this.state.tempinput)
        event.preventDefault()
    }
    render() {
        const list = this.state.list.map((row) => {
            return (<List key={row.key} name={row.value}></List>)
        })
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.tempinput} onChange={this.handleChange} />
                    <button type="submit">Add</button>
                    {list}
                </form>
            </React.Fragment>
        )
    }
}

export default TodoEx