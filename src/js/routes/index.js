import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from '../home'
import Users from '../users/components/index'
import Roles from '../roles/components/index'
const routes = (
    <div>
        <Route path="/" component={Home}/>
        <Route path="/rusers" component={Users}/>
        <Route path="/rroles" component={Roles}/>
    </div>
)
export default routes