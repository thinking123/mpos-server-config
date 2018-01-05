import { connect } from 'react-redux'
import {mapStateToProps , mapDispatchToProps} from './HeaderContainer'
import Header from './Header'


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)