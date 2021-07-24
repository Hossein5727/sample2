import React from 'react'

class ErrorB2 extends React.Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    render(props) {
        if (this.state.hasError) {
            return (<h1>😂🤣 ریدی </h1>)
        }
        return this.props.children
    }
}

export default ErrorB2 