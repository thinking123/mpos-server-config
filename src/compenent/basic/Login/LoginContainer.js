import { connect } from 'react-redux'
import {login} from 'src/store/layout/action'

const getUserInfo = user =>{
    return user
}


export const mapStateToProps = state => {
    return {
        user: getUserInfo(state.user)
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onLogInClick: user => {
            dispatch(login(user.account,user.password))
        },
    }
}