import React from 'react'
import browserHistory from 'src/utils/history'
import {
    Route,
    Redirect
} from 'react-router-dom'
import {connect} from'react-redux'
import {withRouter} from 'react-router-dom'
const AuthRoute = ({component: Component, user, ...rest}) => {

    let isLogin = user.isLogin

    return (
        <Route {...rest} render={props => {


            props = {...props , ...rest}
            if(!isLogin){
                browserHistory.location.state = props.location
                console.log('props.location' , props.location)
            }

            return (
                isLogin ? (
                    <Component {...props}   />
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}/>
                )
            )
        }

        }/>
    )
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default  withRouter(connect(mapStateToProps)(AuthRoute))