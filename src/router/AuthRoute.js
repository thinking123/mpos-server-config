import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'
import {connect} from'react-redux'
import {withRouter} from 'react-router-dom'
const AuthRoute = ({component: Component, user , ...rest }) => {

    let isLogin = user.isLogin
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
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
// export default AuthRoute
export default  connect(mapStateToProps)(AuthRoute)