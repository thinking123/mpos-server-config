let loadingState = {
    isLoading : false,
    text:''
}

let loadingQueue = []
export default function loading(state = loadingState , action){
    switch (action.type){
        // case 'CRE_START_LOADING':
        //     return {...state , isLoading:action.isLoading , text:action.text}
        // case 'CRE_END_LOADING':
        //     return {...state , isLoading:action.isLoading}
        case 'CRE_LOADING':
            if(action.isLoading){
                loadingQueue.push({})
            }else{
                loadingQueue.pop()
            }
            action.isLoading ? loadingQueue.push({}) : loadingQueue.pop()

            return {...state , isLoading:loadingQueue.length > 0 ,text:action.text}

        default:
            return state
    }
}