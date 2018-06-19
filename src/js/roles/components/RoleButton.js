import React from 'react'

const RoleButton = () =>{
    return (
        <button className="btn btn-sm btn-default" onClick={btnFn.bind(this, id)}>
            <i className="fas fa-edit"></i>
        </button>
    )
}

export default RoleButton