import * as types from './types'

let cashRegisterInit = {
    cashRegisterList : []
}


const cashRegisterView = (state = cashRegisterInit , action)=>{

    switch (action.type){
        case types.GET_CASH_REGISTER:
            return {state , cashRegisterList:action.data}
        default:
            return state
    }
}


export default cashRegisterView