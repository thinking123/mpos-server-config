import axios from 'src/http'
import {parseRespond} from 'src/utils/http'
import 'babel-polyfill' // polyfill for regenerator runtime ,then you can use async in action
import browserHistory from 'src/utils/history'
import {showMessage} from 'src/utils/util'
import {push, replace, redirect} from 'react-router-redux'

const loginUrl = '/login'


console.log('tstlog3111' , history)

export const login = (account, password) => {

    console.log('tstlog1' , history)

    return async (dispatch) => {

        console.log('tstlog2' , history)
        dispatch({
            type: 'HTTP',
            payload: {
                request: {
                    url: loginUrl,
                    method: 'post',
                    data: {
                        account,
                        password
                    }
                }
            }
        }).then((data) => {

            console.log('tstlog3' , history)
            console.log('data', data)

                    dispatch({
                        type: 'CRE_LOGIN',
                        account: account,
                        token: '111'
                    })


            console.log('browserHistory' , browserHistory)
            console.log('istory' , history)
            // browserHistory.go(1)
            // let to = browserHistory.location.state ? browserHistory.location.state : '/cre/cash-register-status-config'

            let to = '/cre/cash-register-status-config'


            //
            if(browserHistory.location && browserHistory.state){
                to = browserHistory.state
            }
            console.log('to' ,to)
            dispatch(replace(to))
        }).catch(e => {
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
        //         console.log('state' , browserHistory.state)
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
