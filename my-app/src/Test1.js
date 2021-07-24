import React from 'react'
import Test2 from './Test2'

class Test1 extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <Test2 />
            </React.Fragment>
        )
    }
}
export default Test1
