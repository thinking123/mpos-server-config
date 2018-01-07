import React, { Component, PropTypes } from 'react'
import {Menu} from 'antd'
import css from './Sidebar.css'


export  default class Sidebar extends Component{
    state = {
        menus:[
            {text:'menu1' , name:'path1'},
            {text:'menu2' , name:'path2'}
            ]
    }

    menuClickHandle = (menu)=>{

    }

    render(){
        return(
            <div className={css.sidebar}>
                <div>
                    log
                </div>
                {
                    this.state.menus.map((menu , index)=>{
                        <Menu onClick={this.menuClickHandle(menu)} key={index}>
                            {menu.text}
                        </Menu>
                    })
                }
            </div>
        )
    }
}

