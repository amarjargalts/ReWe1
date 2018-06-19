import React from 'react'

import RoleButton from './RoleButton'
export const RoleItem = ({rw, role, deleteRole, updateRole}) => {
    return (
        <tr>
            <td></td>
            <td>{role.id}</td>
            <td>{role.rname}</td>
            <td>{role.total}</td>
        </tr>
    )
}