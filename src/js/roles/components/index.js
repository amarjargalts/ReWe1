import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../actions'
import RoleList from './RoleList'
console.log('i am roles')
class Roles extends Component{
    render(){
        let {roles, actions} = this.props
        console.log('print from roles: ',actions)
        return (
            <div className="container">
               <h1>Hi i am roles shvv</h1>
               <table>
                   <thead></thead>
                    <RoleList roles={roles} actions={actions} />
               </table>
            </div>
        )
    }
}

function connectStateToProps(state){
    return {
        roles: state.roles
    }
}

function connectDispatchAndActionstoProps(dispatch){
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(connectStateToProps,connectDispatchAndActionstoProps)(Roles)
