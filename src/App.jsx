import {render} from 'react-dom'
import React from 'react'
import {Provider,connect} from 'react-redux'
import {Route} from 'react-router-dom'


import routes from './router'
import store from './store'

import Login from 'src/compenent/basic/Login'

import AuthRoute from 'src/compenent/basic/authRoute/AuthRoute'
import Layout from 'src/compenent/layout/Layout'
//使用ConnectedRouter代替Router，在Redux的action中可以使用 dispatch(push())
import {ConnectedRouter} from  'react-router-redux'

import history from 'src/utils/history'
import {Switch} from 'react-router'
import Loading from 'src/compenent/basic/loading/Loading'

const ConnectedSwitch = connect(state => ({
    location: state.location
}))(Switch)

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div style={{height: '100%', width: '100%'}}>
                <Loading/>
                <Switch>
                    <Route path="/login" exact component={Login}/>
                    <AuthRoute path="/"  component={Layout} store={store} routes={routes}>

                    </AuthRoute>
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>
)

export default App
