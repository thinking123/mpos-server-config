

let queue = []
const begin = (dispatch) => {
    setTimeout(() => {
        queue.push({})
        queue.length > 0 && dispatch(startLoading())
    }, 100)
}
const end = (dispatch) => {
    setTimeout(() => {
        queue.pop({})
        queue.length == 0 && dispatch(endLoading())
    }, 100)

}



const startApiRequest = ()=>(state){
    const {error} = state

    if(error){

    }else{
        //start request
    }
}


const successApiRequest = ()=>(state  ){
    const {payload} = state
    //end request
}

const failureApiRequest = ()=>(state){
    const {payload} = state
    //end request


}




export default function apiRequest(state , action){
    switch (action.type){
        case 'API_REQUEST':
            startApiRequest(state)
            break;
        case 'API_SUCCESS':
            successApiRequest(state)
            break;
        case 'API_FAILURE':
            failureApiRequest(state)
            break;
        default:
            return state
    }
}
