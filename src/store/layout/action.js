import axios from 'src/http'
import {parseRespond} from 'src/utils/http'
import 'babel-polyfill' // polyfill for regenerator runtime ,then you can use async in action
import history from 'src/utils/history'
import {showMessage} from 'src/utils/util'
import { push } from 'react-router-redux'
const loginUrl = '/login'

export const login = (account, password) => {
    // return (dispatch)=>{
    //     dispatch({
    //         type: 'CRE_LOGIN',
    //         account: account,
    //         token: '11'
    //     })
    //
    //     dispatch(push('/'))
    // }

    return async (dispatch) => {

        axios
            .post(loginUrl, {
                account,
                password
            })
            .then(parseRespond)
            .then(data => {

                dispatch({
                    type: 'CRE_LOGIN',
                    account: account,
                    token: data.token
                })

                dispatch(push('/'))
            })
            .catch(e => {
            showMessage(e)
        })

    }

}


export const logout = (account) => {

    return {
        type: 'CRE_LOGOUT',
        account: account,
    }

}
