import axios from 'src/http'
import {parseRespond} from 'src/utils/http'
import 'babel-polyfill' // polyfill for regenerator runtime ,then you can use async in action
import history from 'src/utils/history'
import {showMessage} from 'src/utils/util'
import {push, replace, redirect} from 'react-router-redux'
const loginUrl = '/login'

export const login = (account, password) => {
    return async (dispatch) => {


        dispatch({
            type: 'LOAD',
            payload: {
                request: {
                    url: loginUrl,
                    data: {
                        account,
                        password
                    }
                }
            }
        }).then((data) => {
            console.log('data' , data)
        })
            .catch(e => {
                showMessage(e)
            })


        //
        // axios
        //     .post(loginUrl, {
        //         account,
        //         password
        //     })
        //     .then(parseRespond)
        //     .then(data => {
        //
        //         dispatch({
        //             type: 'CRE_LOGIN',
        //             account: account,
        //             token: data.token
        //         })
        //
        //         console.log('state' , history.state)
        //         dispatch(replace('/'))
        //     })
        //     .catch(e => {
        //         showMessage(e)
        //     })

    }

}


export const logout = (account) => {

    return {
        type: 'CRE_LOGOUT',
        account: account,
    }

}
