import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'
const AuthRoute = ({component: Component, store , ...rest }) => {

    console.log('store' , store , rest ,Component)
    let isLogin = store.getState().user.isLogin;

    console.log('is loged' , isLogin ,Component )
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