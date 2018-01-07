import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'
const AuthRoute = ({component: Component, ...rest}) => {

    let isLogin = rest.store.getState().user.isLogin;
    return (
        <Route {...rest} render={props => (
            isLogin ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}/>
            )
        )}/>
    )
}

export default AuthRoute