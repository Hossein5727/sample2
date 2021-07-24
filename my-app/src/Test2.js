import React from 'react'
import Test3 from './Test3'

class Test2 extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <Test3 />
            </React.Fragment>
        )
    }
}
export default Test2
