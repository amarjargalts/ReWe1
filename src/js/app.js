import style3 from '../css/style3.scss'
import React from 'react'
import {render} from 'react-dom'
import Users from './users/index'
console.log('Running at ' + process.env.NODE_ENV + ' mode')
console.log('i am app.js')
render(<Users />,document.getElementById('app'))

