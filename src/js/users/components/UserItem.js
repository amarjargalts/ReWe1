import React from 'react'
import UserButton from './UserButton'
export const UserItem = ({rw, user, deleteUser, updateUser}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.job}</td>
            <UserButton btnFn={deleteUser} id={user.id} />
        </tr>
    )
}