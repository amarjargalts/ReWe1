import style3 from '../css/style3.scss'
import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import routes from './routes/index'
import {Provider} from 'react-redux'
import configureStore from './store'
console.log('Running at: ' + process.env.NODE_ENV + ' mode')

var initialState = {
    users: [
        {
            fname: 'amaraa',
            lname: '1',
            job: '102',
            id: 1,
        },
        {
            fname: 'ganaa',
            lname: '2',
            job: '101',
            id: 2
        },
        {
            fname: 'bataa',
            lname: '3',
            job: '103',
            id: 3
        }
    ],  
    roles: [
        {
            rname: 'bookstart1',
            total: 100,
            id: 10
        },
        {
            rname: 'bookstart2',
            total: 1000,
            id: 11
        },
        {
            rname: 'bookstart3',
            total: 10000,
            id: 12
        }
    ]
}
let store = configureStore(initialState)
console.log('stores state: ',store.getState())
render(
    <Provider store={store}>
         <Router>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
)