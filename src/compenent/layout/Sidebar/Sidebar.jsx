import React, {Component, PropTypes} from 'react'
import {Menu, Icon} from 'antd'
import { Link  } from 'react-router-dom';
import css from './Sidebar.less'


export  default class Sidebar extends Component {
    state = {
        menus: [
            {text: '收银机状态', name: 'cashRegisterStatus' , path:"/cre/cash-register-status-config"},
            {text: '收银机配置', name: 'cashRegisterConfig', path:"/cre/cash-register-configuration"},
            {text: '交易数据', name: 'dealData', path:"/cre/cash-register-status-config"},
            {text: '心跳数据', name: 'tickData', path:"/cre/cash-register-status-config"},
            {text: '交易对账', name: 'dealReconciliation', path:"/cre/cash-register-status-config"},
            {text: '收银员操作日志', name: 'cashOperationLog', path:"/cre/cash-register-status-config"},
            {text: '异常支付', name: 'exceptionPay', path:"/cre/cash-register-status-config"},
            {text: '异常日志', name: 'exceptionLog', path:"/cre/cash-register-status-config"},
            {text: '日志文件', name: 'logFile', path:"/cre/cash-register-status-config"},
            {text: '版本更新', name: 'versionUpdate', path:"/cre/cash-register-status-config"},
        ]
    }

    menuClickHandle = (e) => {

    }

    render() {
        const {menus} = this.state
        return (
            <div className={css.wrap}>



                <Menu className={css.menu} onClick={this.menuClickHandle} defaultSelectedKeys={[menus[0].name]} mode="inline">
                    {
                        this.state.menus.map((menu, index) => (
                            <Menu.Item key={menu.name}>

                                <Link to={menu.path}>    <Icon type="pie-chart"/>{menu.text}</Link>
                            </Menu.Item>
                        ))
                    }

                </Menu>
            </div>
        )
    }
}

