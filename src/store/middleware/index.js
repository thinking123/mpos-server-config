import thunkMiddleware from 'redux-thunk'
// Create a history of your choosing (we're using a browser history in this case)
import history from 'src/utils/history'
import { routerMiddleware} from 'react-router-redux'

// import http from './http'
// import apiMiddleware from './api'
import request from './request'
import log from './log'

export default [
    routerMiddleware(history),
    log,
    thunkMiddleware,
    // apiMiddleware
    request
]