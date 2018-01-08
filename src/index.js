import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


import routers from './router'
import store from './store'

import Login from 'src/compenent/basic/Login'

import AuthRoute from './router/AuthRoute'
import Layout from 'src/compenent/layout/Layout'
const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
)


    // <Route path="/" exact component={Login}/>

render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/login" exact component={Login}/>
                {routers.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}

                <AuthRoute path="/" exact component={Layout} store={store}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)
