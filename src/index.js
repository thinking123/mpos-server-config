import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


import routers from './router'
import store from './store'


const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
)




render(
    <Provider store={store}>
        <Router>
            {routers.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </Router>
    </Provider>,
    document.getElementById('root')
)
