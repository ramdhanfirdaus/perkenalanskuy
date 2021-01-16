import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {LandingPage} from '../containers/LandingPage'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={LandingPage} />
            </Switch>
        </BrowserRouter>
    )
}