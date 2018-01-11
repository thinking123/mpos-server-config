/*eslint-disable */
import { RSAA } from `redux-api-middleware` //eslint-disable-line
/*eslint-disable */

const baseUrl = 'http://localhost:8080'

export const request = (partialUrl , method='GET' , body = {})=>{
    return {
        [RSAA]: {
            endpoint: `${baseUrl}/${partialUrl}`,
            method,
            body,
            types: ['API_REQUEST', 'API_SUCCESS', 'API_FAILURE']
        }
    }
}