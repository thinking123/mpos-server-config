import * as action from './action'
import {showMessage} from 'src/utils/util'
let user = {
    account:'',
    isLogin:false,
    loginDate:'',
    logoutDate:'',
    token:''
}


if(localStorage.getItem('CRE_ACCOUNT')){
    try{
        user = JSON.parse(localStorage.getItem('CRE_ACCOUNT'))
    }catch (e){
        user = {
            account:'',
            isLogin:false,
            loginDate:'',
            logoutDate:'',
            token:''
        }
    }
}

const login = ()=>{

}


export default function account(state = user , action){
    switch (action.type){
        case 'CRE_LOGIN_SUCCESS':
            let res = {...state , loginDate:new Date() , isLogin :true , token:action.payload.token ,account:action.payload.account}
            localStorage.setItem('CRE_ACCOUNT' , JSON.stringify(res))
            return res
        case 'CRE_LOGIN_FAILURE':
            showMessage(action.payload)
            return state
        case 'CRE_LOGOUT_SUCCESS':
            let resout = {...state ,account : action.account, logoutDate:new Date() , isLogin :false}
            localStorage.setItem('CRE_ACCOUNT' , JSON.stringify(resout))
            return resout
        default:
            return state
    }
}