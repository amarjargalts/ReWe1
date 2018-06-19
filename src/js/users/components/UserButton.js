import React from 'react'
const UserButton = ({btnFn, id}) => {
    return (
        <button className="btn btn-sm btn-default" onClick={btnFn.bind(this, id)}>
            <i className="fas fa-edit"></i>
        </button>
    )
}
export default UserButton