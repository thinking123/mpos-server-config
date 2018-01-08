let loadingState = {
    isLoading : false,
    text:''
}


export default function loading(state = loadingState , action){
    switch (action.type){
        case 'CRE_START_LOADING':
            return {...state , isLoading:action.isLoading , text:action.text}
        case 'CRE_END_LOADING':
            return {...state , isLoading:action.isLoading}
        default:
            return state
    }
}