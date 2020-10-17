import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Question from './pages/js/Question.js'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/question1">
                    <Question />
                </Route>
            </Switch>
        )
    }
}

export default Routes