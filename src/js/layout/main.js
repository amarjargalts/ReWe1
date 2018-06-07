import React from 'react'
import {HashRouter as Router,Route, Switch} from 'react-router-dom'
import Home from '../home'
import Users from '../users/components/index'
import Roles from '../roles/components/index'
const Main = () => {
    return (
        <Router>
            <div>
                <Route component={Home} path="/"></Route>
                <Route component={Users} path="/rusers"></Route>
                <Route component={Roles} path="/rroles"></Route>
            </div>
        </Router>
    )
}
export default Main