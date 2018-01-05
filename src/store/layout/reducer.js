let user = {}


if(localStorage.getItem('CRE_ACCOUNT')){
    try{
        user = JSON.parse(localStorage.getItem('CRE_ACCOUNT'))
    }catch (e){
        user = {
            account:'',
            isLogin:false,
            loginDate:'',
            logoutDate:''
        }
    }
}



export function account(state = user , action){
    switch (action.type){
        case 'CRE_LOGIN':
            return {...state , loginDate:new Date() , isLogin :true}
        case 'CRE_LOGOUT':
            return {...state ,account : action.account, logoutDate:new Date() , isLogin :false}
        default:
            return state;
    }
}