import * as C from './const'
const Users_reducer = (state = [], action) => {
    state = Object.assign([], state)
    switch(action.type){
        case C.DELETE_USER:
            state.map((item) => {
                if(item.id == action.id)
                    ++item.job
                return item   
            })
            break;
        default:
            break;
    }
    return state
}
export default Users_reducer