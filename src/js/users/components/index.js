import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions'
import UserList from './UserList'
class Users extends Component{   
    render(){
        const {users, actions} = this.props
        return (
            <div className="container">
                <div className="form-group"> 
                    <h6>
                        Нийт хэрэглэгчид
                        <span className="badge badge-info"></span>
                    </h6>
                </div>
                <table className="table table-borderless table-hover">
                <thead className="table-success">
                    <th>#</th><th>Овог <a href=""><i className="fas fa-sort"></i></a></th>
                    <th>Нэр <a href=""><i className="fas fa-sort"></i></a></th>
                    <th>Нэвтрэх нэр <a href=""><i className="fas fa-sort"></i></a></th><th>Үйлдэл</th>
                </thead>
                    <UserList users={users} actions={actions} />
                </table>
            </div>
        )
    }
}

function connectStateToProps(state){
    return {
        users: state.users
    }
}

function connectDispatchAndActionstoProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(connectStateToProps,connectDispatchAndActionstoProps)(Users)