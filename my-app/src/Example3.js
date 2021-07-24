import React from 'react'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import DesCounterClick from './DesCounterClick'
import DesCounterHover from './DesCounterHover'


class Example3 extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Route exact path="/page1" component={DesCounterClick} />
                    <Route exact path="/page2" component={DesCounterHover} />
                </BrowserRouter>
                <h1>Tobi</h1>
            </React.Fragment>
        )
    }
}

export default Example3