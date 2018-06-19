import React,{Component} from 'react'

import RoleItem from './RoleItem'
class RoleList extends Component{
    render(){
        let {roles, actions} = this.props
        return (
            <tbody>
                {
                    roles.map((role, i) => {
                        return (
                            <RoleItem key={i} role={role} 
                                deleteRole={actions.deleteRole} updateRole={actions.updateRole} 
                            />
                        )
                    })
                }
            </tbody>
        )
    }
}

export default RoleList