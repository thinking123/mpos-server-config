import React, { Component } from 'react';

import Footer from 'src/component/layout/Footer'
import Header from 'src/component/layout/Header'
import Sidebar from 'src/component/layout/Sidebar'


class Layout extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Header/>
                <div>
                    <Sidebar/>
                    <div>
                        {this.props.children}
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout