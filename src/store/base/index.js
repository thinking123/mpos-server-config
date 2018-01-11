import loading from './loading/reducer'
import baseConfig from './reducer'
import { combineReducers } from 'redux'




export default combineReducers({
    loading,
    baseConfig
})