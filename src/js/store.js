import {createStore, compose} from 'redux'
import reducers from './reducer'

let composedStore = compose(
    window.devToolsExtension ? window.devToolsExtension(): f => f
)(createStore)
export default function configureStore (initialState){
    return composedStore(reducers, initialState)
}