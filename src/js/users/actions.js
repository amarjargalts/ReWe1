import * as C from './const'
export const addUser = (usersObj) => {
        return {
            type: C.ADD_USER,
            payload: usersObj
        }
}

export const deleteUser = (id) => {
    return {
        type: C.DELETE_USER,
        id: id
    }
}

export const updateUser = (id) => {
    return {
        type: C.UPDATE_USER,
        id: id
    }
}