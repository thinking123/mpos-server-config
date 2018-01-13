// import CashRegisterStatusConfig from 'cre/view/CashRegisterStatusConfig'

import {withLazyLoading} from 'src/compenent/basic/lazyLoad/lazyLoadingWrapper'

export default [{
    path:'/cre/cash-register-status-config',
    component:withLazyLoading(()=>import(/* webpackChunkName: "CashRegisterStatusConfig" */ 'cre/view/CashRegisterStatusConfig'))
}]