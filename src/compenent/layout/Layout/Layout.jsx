import React, { Component } from 'react';

import Footer from 'src/compenent/layout/Footer'
import Header from 'src/compenent/layout/Header'
import Sidebar from 'src/compenent/layout/Sidebar'


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