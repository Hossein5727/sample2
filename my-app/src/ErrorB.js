import React from 'react'

class ErrorB extends React.Component {
    constructor() {
        super()
        this.state = {
            hasErr: false,
        }
    }
    static getDerivedStateFromError(error) {
        return { hasErr: true }
    }
    render() {
        if (this.state.hasErr) {
            return (<h1>Error 😂😂😂😂</h1>)
        }
        return this.props.children
    }
}
export default ErrorB