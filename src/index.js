// import {render} from 'react-dom'
// import React from 'react'
// import {Provider} from 'react-redux'
// import {Route} from 'react-router-dom'
//
//
// import routers from './router'
// import store from './store'
//
// import Login from 'src/compenent/basic/Login'
//
// import AuthRoute from './router/AuthRoute'
// import Layout from 'src/compenent/layout/Layout'
// //使用ConnectedRouter代替Router，在Redux的action中可以使用 dispatch(push())
// import {ConnectedRouter} from  'react-router-redux'
//
// import history from 'src/utils/history'
// import {Switch} from 'react-router'
//
// const RouteWithSubRoutes = (route) => (
//     <Route path={route.path} render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes}/>
//     )}/>
// )
//
// render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <div>
//                 <Switch>
//                     <Route path="/login" exact component={Login}/>
//                     {routers.map((route, i) => (
//                         <RouteWithSubRoutes key={i} {...route}/>
//                     ))}
//                     <AuthRoute path="/" exact component={Layout} store={store}/>
//                 </Switch>
//             </div>
//         </ConnectedRouter>
//     </Provider>,
//     document.getElementById('root')
// )
import React from 'react'
import {render} from 'react-dom'
import App from './App'
//for hmr
import { AppContainer } from 'react-hot-loader'
render(
    <App/>,
    document.getElementById('root')
)


// Webpack Hot Module Replacement API
// if (module.hot) {
//     module.hot.accept('./App', () => {
//         render(App)
//     })
// }