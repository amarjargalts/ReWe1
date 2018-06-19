import * as C from './const'

export const addRole = (roleObj) => {
    return {
        type: C.ADD_ROLE,
        payload: roleObj
    }
}

export const deleteRole = (id) => {
    return {
        type: C.DELETE_ROLE,
        id: id
    }
}

export const updateRole = (id) => {
    return {
        type: C.UPDATE_ROLE_ROLE,
        id: id
    }
}