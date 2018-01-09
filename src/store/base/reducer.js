let base = {
    isShow : true
}


// if(localStorage.getItem('CRE_ACCOUNT')){
//     try{
//         base = JSON.parse(localStorage.getItem('CRE_ACCOUNT'))
//     }catch (e){
//         base = {
//             isShow : true
//         }
//     }
// }




const baseReducer = (state=base , action)=>{
    switch (action.type){
        case 'CRE_TOGGLE_SIDEBAR':
            return {...state , isShow:!state.isShow}
        default:
            return state
    }
}


export default baseReducer