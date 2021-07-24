import React from 'react'
import { UserConsumer } from './Usercontext'

class Test3 extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <UserConsumer>
                    {
                        (username) => {
                            return (<p>Your Name is {username} </p>)
                        }
                    }
                </UserConsumer>
            </React.Fragment>
        )
    }
}
export default Test3
