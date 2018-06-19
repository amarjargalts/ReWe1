import {combineReducers} from 'redux'
import Users_reducer from './users/reducer'
import Roles_reducers from './roles/reducer'
const reducers = combineReducers({
    users: Users_reducer,
    roles: Roles_reducers
})
export default reducers