// import CashRegisterConfiguration from 'cre/view/CashRegisterConfiguration'
// export default [{
//     path:'/cre/cash-register-configuration',
//     component:'CashRegisterConfiguration'
// }]
import {withLazyLoading} from 'src/compenent/basic/lazyLoad/lazyLoadingWrapper'

export default [{
    path:'/cre/cash-register-configuration',
    component:withLazyLoading(()=>import(/* webpackChunkName: "CashRegisterConfiguration" */ 'cre/view/CashRegisterConfiguration'))
}]