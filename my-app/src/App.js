import React from 'react'
import Test1 from './Test1'
import { UserProvider } from './Usercontext'

class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <UserProvider value="mammad">
                    <Test1 />
                </UserProvider>
            </React.Fragment>
        )
    }
}
export default App
