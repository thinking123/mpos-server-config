import axios from 'src/http'
import {parseRespond} from 'src/utils/http'
import 'babel-polyfill'
import * as types from './types'

export const getCashRegisterList = (params) => {

    axios
        .get(loginUrl, params)
        .then(parseRespond)
        .then(data => {
            dispatch({
                type: types.GET_CASH_REGISTER,
                data
            })
        })
        .catch(e => {
            showMessage(e)
        })
}


