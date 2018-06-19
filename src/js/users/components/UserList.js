import React, {Component} from 'react'
import {UserItem} from './UserItem'
class UserList extends Component{
    render(){
        const {users, actions} = this.props
        return (
            <tbody>
                {
                   users.map((user, i) => {
                       return (
                            <UserItem key = {i} user={user} 
                                deleteUser={actions.deleteUser}
                                updateUser={actions.updateUser}
                            />
                       )
                   })
                }       
            </tbody>
        )
    }
}
export default UserList