import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import Footer from 'src/compenent/layout/Footer'
import Header from 'src/compenent/layout/Header'
import Sidebar from 'src/compenent/layout/Sidebar'
import Breadcrumb from 'src/compenent/basic/breadcrumb/Breadcrumb'
import css from './Layout.less'

import {withLazyLoading} from 'src/compenent/basic/lazyLoad/lazyLoadingWrapper'


const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
)
const mapStateToProps = state => {
    return {
        isShow:state.base.baseConfig.isShow
    }
}

class Layout extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {routes,isShow} = this.props
        console.log('routes' ,this.props)
        return (
            <div className={css.wrap}>
                <Header/>
                <div className={css.bodyWrap}>
                    {isShow ? <Sidebar/> : null}
                    <div className={css.contentWrap}>
                        <Breadcrumb/>
                        <div className={css.content}>
                            {routes ? routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} {...route}/>
                            )) : null}
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Layout)