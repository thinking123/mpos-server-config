import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';


import MockAdapter from 'axios-mock-adapter'

import {startLoading, endLoading} from 'src/store/base/loading/action'


const client = axios.create({
    responseType: 'json',
    baseURL:'https://github.com/axios/axios'
})

//
// let mock = new MockAdapter(client, {delayResponse: 2000});
//
// mock.onPost('/login').reply(config => {
//     // console.log(config)
//     const {account, password} = config.data
//
//     console.log('this is mock 11111111111')
//     // return [200 , {
//     //     data:{
//     //         token:'test of token'
//     //     },
//     //     status:'200'
//     // }]
//     //
//     if (account == 'test' && password == "123") {
//         return [200, {
//             data: {
//                 token: 'test of token'
//             },
//             status: '200'
//         }]
//     } else {
//         return [401, {
//             data: {
//                 message: 'login error'
//             },
//             status: '401'
//         }]
//     }
//
// })
let queue = []
const begin = (dispatch) => {
    setTimeout(() => {
        queue.push({})
        queue.length > 0 && dispatch(startLoading())
    }, 100)
}
const end = (dispatch) => {
    setTimeout(() => {
        queue.pop({})
        queue.length == 0 && dispatch(endLoading())
    }, 100)

}


const middlewareConfig = {
    interceptors: {
        request: [{
            success: function ({getState, dispatch, getSourceAction}, req) {
                console.log('begin', req); //contains information about request object
                //...
                begin(dispatch)

            },
            error: function ({getState, dispatch, getSourceAction}, error) {
                //...
                end(dispatch)
            }
        }
        ],
        response: [{
            success: function ({getState, dispatch, getSourceAction}, req) {
                console.log('end', req); //contains information about request object
                end(dispatch)
                //...
            },
            error: function ({getState, dispatch, getSourceAction}, error) {
                //...
                end(dispatch)
            }
        }
        ]
    }
}


export default axiosMiddleware(client, middlewareConfig)