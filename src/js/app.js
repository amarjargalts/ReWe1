import style3 from '../css/style3.scss'
import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './layout/header'
import Home from './home'
import Users from './users/components/index'
import Roles from './roles/components/index'
console.log('Running at: ' + process.env.NODE_ENV + ' mode')
render(
    <Router>
        <div>
            <div>
                <Route component={Home} path="/"></Route>
                <Route component={Users} path="/rusers"></Route>
                <Route component={Roles} path="/rroles"></Route>
            </div>
        </div>
    </Router>
    ,document.getElementById('app')
)

