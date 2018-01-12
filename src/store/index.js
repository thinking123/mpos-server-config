import {createStore, combineReducers, applyMiddleware} from 'redux'

import middleware from './middleware'

// import cre from 'cre/store'
import user from './layout/reducer'
import base from './base'
import entities from './api/reducer'
// import api from './api/reducer'
import {routerReducer} from 'react-router-redux'



const reducers = combineReducers(
    {
        user,
        base,
        entities,
        // api,
        router: routerReducer
    }
)

export default createStore(
    reducers,
    applyMiddleware(...middleware)
)