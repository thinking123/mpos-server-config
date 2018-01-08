import { connect } from 'react-redux'
import {logout} from 'src/store/layout/action'
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
        onLogOutClick: user => {
            dispatch(logout(user.account))
        },
    }
}