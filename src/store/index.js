import {createStore, combineReducers, applyMiddleware} from 'redux'

import middleware from './middleware'

import cre from 'cre/store'
import user from './layout/reducer'

// console.log('in store' , user)
const reducers = combineReducers(
    {
        user
    }
)

export default createStore(reducers,
    //middleware export array , but applyMiddleware need not array so use apply
    applyMiddleware.apply(this, middleware)
)