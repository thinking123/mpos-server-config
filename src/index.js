import {render} from 'react-dom'
import React from 'react'
import {Provider ,connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


import routers from './router'
import store from './store'

import Login from 'src/compenent/basic/Login'

import AuthRoute from './router/AuthRoute'
import Layout from 'src/compenent/layout/Layout'

import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter} from  'react-router-redux'

import history from 'src/utils/history'
import {withRouter} from 'react-router'

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
)
const Test = ()=>(
    <div>
        tset
    </div>
)
const App1 = ()=>(
    <div>
        <Router>
            <div>
                <Route path="/login" exact component={Login}/>
                {/*{routers.map((route, i) => (*/}
                {/*<RouteWithSubRoutes key={i} {...route}/>*/}
                {/*))}*/}
                <AuthRoute path="/" exact component={Test} store={store}/>
            </div>
        </Router>
    </div>
)
const App =     connect()(App1)

// <Route path="/" exact component={Login}/>

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
