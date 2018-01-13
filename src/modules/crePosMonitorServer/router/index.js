import Layout from 'src/compenent/layout/Layout/Layout'

import CashRegisterStatusConfig from './cashRegisterStatusConfig'
import CashRegisterConfiguration from './cashRegisterConfiguration'

// export default {
//     path:'/cre',
//     component:Layout,
//     routes:[
//         CashRegisterStatusConfig
//     ]
// }

export default [
    ...CashRegisterStatusConfig,
    ...CashRegisterConfiguration
]