/* eslint-disable */
import { RSAA } from 'redux-api-middleware'
/* eslint-enable */
// import { RSAA } from 'redux-api-middleware';
import {startLoading, endLoading} from 'src/store/base/loading/action'

console.log('RSAA' , RSAA)

const baseUrl = 'http://localhost:8080'
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

export const request = (partialUrl, method = 'GET', body = {}) => {

    return {
        [RSAA]: {
            // endpoint: `${baseUrl}/${partialUrl}`,
            endpoint: 'https://redux.js.org/docs/api/compose.html',
            method,
            types: ['REQUEST', 'SUCCESS', 'FAILURE']
            // types: [
            //     {
            //         type: 'REQUEST',
            //         payload: (action, state) => {
            //             begin(dispatch)
            //         }
            //     },
            //     {
            //         type: 'SUCCESS',
            //         payload: (action, state, res) => {
            //             end(dispatch)
            //             console.log(res)
            //         }
            //     },
            //     {
            //         type: 'FAILURE',
            //         meta: (action, state, res) => {
            //             end(dispatch)
            //            console.log(res)
            //         },
            //         payload: (action, state, res) => {
            //             end(dispatch)
            //             console.log(res)
            //         }
            //     }
            //     ]
        }
    }
}