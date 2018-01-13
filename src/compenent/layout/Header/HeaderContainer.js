import {logout} from 'src/store/login/action'
import {toggleSidebar} from 'src/store/base/action'
const getUserInfo = user =>{
    return user
}


export const mapStateToProps = state => {
    return {
        user: getUserInfo(state.user),
        isShow:state.base.baseConfig.isShow
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onLogOutClick: account => {
            dispatch(logout(account))
        },
        onToggleSideBarClick:isShow=>{
            dispatch(toggleSidebar())
        }
    }
}