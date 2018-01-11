/*eslint-disable */
import {RSAA} from 'redux-api-middleware' //eslint-disable-line
/*eslint-disable */
import {startLoading, endLoading} from 'src/store/base/loading/action'

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

    return dispatch => {

        dispatch({
            [RSAA]: {
                endpoint: `${baseUrl}/${partialUrl}`,
                method,
                body,
                types: [
                    {
                        type: 'REQUEST',
                        payload: (action, state) => {
                            begin(dispatch)
                        }
                    },
                    {
                        type: 'SUCCESS',
                        payload: (action, state, res) => {
                            end(dispatch)
                            console.log(res)
                        }
                    },
                    {
                        type: 'FAILURE',
                        meta: (action, state, res) => {
                            end(dispatch)
                           console.log(res)
                        },
                        payload: (action, state, res) => {
                            end(dispatch)
                            console.log(res)
                        }
                    }
                    ]
            }
        })
    }
}