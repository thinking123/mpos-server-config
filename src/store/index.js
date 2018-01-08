import {createStore, combineReducers, applyMiddleware} from 'redux'

import middleware from './middleware'

// import cre from 'cre/store'
import user from './layout/reducer'
import base from './base'

import {routerReducer} from 'react-router-redux'



const reducers = combineReducers(
    {
        user,
        base,
        router: routerReducer
    }
)

export default createStore(
    reducers,
    applyMiddleware(...middleware)
)