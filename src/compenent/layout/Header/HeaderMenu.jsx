import React, {Component, PropTypes} from 'react'
import {Menu, Dropdown, Icon} from 'antd'

const menu = (onMenuClick) => (
    <Menu onClick={onMenuClick}>
        <Menu.Item key="logout">
            Logout
        </Menu.Item>
    </Menu>
)

export default class HeaderMenu extends Component {
    onMenuClick = (e) => {
        const {user, onLogOutClick} = this.props
        console.log('log', e, this.props)
        switch (e.key) {
            case 'logout':
                onLogOutClick(user.account)
                break;
        }
    }

    render() {
        return (
            <Dropdown overlay={menu(this.onMenuClick)} trigger={['click']}>
        <span className="ant-dropdown-link">
                 {this.props.user.account}<Icon type="down"/>
        </span>
            </Dropdown>)
    }


}

