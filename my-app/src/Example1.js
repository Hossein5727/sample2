import React from 'react'
import ErrorB from './ErrorB'
import Test4 from './Test4'

class Example1 extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <ErrorB>
                    <Test4 myname="Hossein" />
                </ErrorB>
                <ErrorB>
                    <Test4 myname="mammad" />
                </ErrorB>
            </React.Fragment>
        )
    }
}
export default Example1