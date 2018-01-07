import axios from 'src/http'
import {parseRespond} from 'src/utils/http'
import 'babel-polyfill' // polyfill for regenerator runtime ,then you can use async in action
const loginUrl = '/login'
export const login = (account , password )=>{

    // console.log( this.history)
    return async (dispatch)=>{

       let data = await axios.post(loginUrl , {
            account,
            password
        }).then(parseRespond)

        console.log('login data' , data);
        dispatch({
            type:'CRE_LOGIN',
            account: account,
            token:data.token
        })

        // console.log(history)
        // history.push(history.state.from)
    }

}



export const logout = (account)=>{

    return {
        type:'CRE_LOGOUT',
        account: account,
    }

}
