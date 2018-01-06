import Login from './Login.jsx'
import { connect } from 'react-redux'
import {mapStateToProps , mapDispatchToProps} from './LoginContainer'


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)