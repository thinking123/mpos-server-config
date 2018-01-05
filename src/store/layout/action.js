import axios from 'src/http'
import {parseRespond} from 'src/utils/http'
const loginUrl = ''
export const login = (account , password)=>{

    return async (dispatch)=>{

       let data = await axios.post(loginUrl , {
            account,
            password
        }).then(parseRespond)

        console.log('login data' , data);
        dispatch({
            type:'CRE_LOGIN',
            account: account,
        })

    }

}



export const logout = (account)=>{

    return {
        type:'CRE_LOGOUT',
        account: account,
    }

}
