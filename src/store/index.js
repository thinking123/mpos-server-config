import {createStore ,combineReducers ,applyMiddleware } from 'redux'

import middleware from './middleware'

import cre from 'cre/store'
import layout from './layout/reducer'



const reducers = combineReducers(
    cre,
    layout
)

export default createStore(reducers ,
    //middleware export array , but applyMiddleware need not array so use apply
    applyMiddleware.apply(this , middleware)
)