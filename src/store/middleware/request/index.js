import {loading} from 'src/store/base/loading/action'
import {httpConfig, fetchConfig} from './requestConfig'

import fetchMock from './fetchMock'

let timer = []
const begin = (dispatch) => {
    //延迟100ms 显示loading bar
    timer.push(setTimeout(() => {
        dispatch(loading(true))
    }, 100))

}
const end = (dispatch) => {
    //如果没有到100ms，直接clear begin的timer
    clearTimeout(timer.splice(0, 1))
    dispatch(loading(false))
}
/**
 * type = [REQUEST,SUCCESS , FAILURE]
 * request middleware 请求action construct
 * payload :{
 *      request:{
 *          url,
 *          method,
 *          body,
 *          headers,
 *          ...
 *      }
 * }
 *
 */
const request = store => next => async (action) => {
    const {type, payload = null} = action
    const {dispatch} = store
    if (!type || !payload || !payload.request || !payload.url) return next(action)

    let BEGIN = `${action.type}_BEGIN`,
        SUCCESS = `${action.type}_SUCCESS`,
        FAILURE = `${action.type}_FAILURE`,
        params = payload.request.params,
        url = `${httpConfig.baseUrl}/${payload.url}`

    let pm = []
    Object.keys(params).forEach(k => {
        pm.push(`${k}=${params[k]}`)
    })

    if (pm.length > 0) {
        url = `${url}?${pm.join('&')}`
        delete payload.request.params
    }

    let requstConfig = {...fetchConfig, ...payload.request}
    //begin request action
    dispatch({
        type: BEGIN,
        payload: payload.request
    })
    //start loading
    begin(dispatch)

    try {
        const response = await fetch(url, requstConfig)
        console.log('response' , response)
        const json = await response.json()

        if (response.ok) {
            dispatch({
                type: SUCCESS,
                payload: json
            })
        } else {
            dispatch({
                type: FAILURE,
                error: true,
                payload: json
            })
        }
    } catch (e) {
        console.log('error', e)
        dispatch({
            type: FAILURE,
            error: true,
            payload: e
        })
    } finally {
        //end loading
        end(dispatch)
    }


}

export default request