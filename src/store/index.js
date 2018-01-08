import {createStore, combineReducers, applyMiddleware} from 'redux'

import middleware from './middleware'

import cre from 'cre/store'
import user from './layout/reducer'

import {routerReducer} from 'react-router-redux'




// console.log('in store' , user)
const reducers = combineReducers(
    {
        user,
        router: routerReducer
    }
)

export default createStore(
    reducers,
    applyMiddleware(...middleware)
)