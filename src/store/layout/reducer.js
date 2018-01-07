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



export default function account(state = user , action){
    switch (action.type){
        case 'CRE_LOGIN':
            let res = {...state , loginDate:new Date() , isLogin :true , token:action.token ,account:action.account}
            localStorage.setItem('CRE_ACCOUNT' , JSON.stringify(res))
            return res
        case 'CRE_LOGOUT':
            return {...state ,account : action.account, logoutDate:new Date() , isLogin :false}
        default:

            console.log('default' , state)
            return state;
    }
}