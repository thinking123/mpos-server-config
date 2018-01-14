import {getCashRegisterList} from '../../store/cashRegisterStatusConfig/action'



export const mapStateToProps = state => {
    return {
        cashRegisterView: state.cashRegisterView
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        getCashRegisterList: params => {
            dispatch(getCashRegisterList(params))
        },
    }
}