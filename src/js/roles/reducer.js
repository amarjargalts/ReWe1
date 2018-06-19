import * as C from './const'

const Roles_reducers = (state = [], action) => {
    state = Object.assign([], state)
    switch(action.type){
        case C.ADD_ROLE: 
            break;
        case C.DELETE_ROLE:
                state.map((item) => {
                    if(item.id == action.id)
                        ++state.total
                })
            break;
        case C.UPDATE_ROLE:
            break
    }
    return state
}
export default Roles_reducers