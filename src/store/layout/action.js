import axios from 'src/http'
import {parseRespond} from 'src/utils/http'
import 'babel-polyfill' // polyfill for regenerator runtime ,then you can use async in action
import browserHistory from 'src/utils/history'
import {showMessage} from 'src/utils/util'
import {push, replace, redirect} from 'react-router-redux'

const loginUrl = 'authen/login'
export const CRE_ACCOUNT = 'CRE_ACCOUNT'
export const LOGIN = 'CRE_LOGIN'
export const LOGOUT = 'CRE_LOGOUT'
export const LOGIN_SUCCESS = 'CRE_LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'CRE_LOGIN_FAILURE'
export const LOGOUT_SUCCESS = 'CRE_LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'CRE_LOGOUT_FAILURE'
export const login = (account, password) => {
    let params = {
        _dc:1515749635190,
        user:account,
        pwd:password
    }
    return {
        type:'CRE_LOGIN',
        payload:{
            url:loginUrl,
            request:{
                params
            }
        }
    }
}
export const logout = (account) => {
    return {
        type: 'CRE_LOGOUT_SUCCESS',
        account,
    }
}
//
// export const login = (account, password) => {
//
//    
//
//
//     return async (dispatch) => {
//
//        
//         dispatch({
//             type: 'HTTP',
//             payload: {
//                 request: {
//                     url: loginUrl,
//                     method: 'post',
//                     data: {
//                         account,
//                         password
//                     }
//                 }
//             }
//         }).then((data) => {
//
//            
//            
//
//                     dispatch({
//                         type: 'CRE_LOGIN',
//                         account: account,
//                         token: '111'
//                     })
//
//
//            
//            
//             // browserHistory.go(1)
//             // let to = browserHistory.location.state ? browserHistory.location.state : '/cre/cash-register-status-config'
//
//             let to = '/cre/cash-register-status-config'
//
//
//             //
//             if(browserHistory.location && browserHistory.state){
//                 to = browserHistory.state
//             }
//            
//             dispatch(replace(to))
//         }).catch(e => {
//             showMessage(e)
//         })
//
//
//         //
//         // axios
//         //     .post(loginUrl, {
//         //         account,
//         //         password
//         //     })
//         //     .then(parseRespond)
//         //     .then(data => {
//         //
//         //         dispatch({
//         //             type: 'CRE_LOGIN',
//         //             account: account,
//         //             token: data.token
//         //         })
//         //
//         //         
//         //         dispatch(replace('/'))
//         //     })
//         //     .catch(e => {
//         //         showMessage(e)
//         //     })
//
//     }
//
// }
//
//
// export const logout = (account) => {
//
//     return {
//         type: 'CRE_LOGOUT',
//         account: account,
//     }
//
// }
