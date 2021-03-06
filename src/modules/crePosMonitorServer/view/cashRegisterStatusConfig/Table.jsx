import { Table ,Icon,Row,Button} from 'antd';
import React, { Component } from 'react';
import {confirm} from 'src/utils/util'
import css from './cashRegisterStatusConfig.less'
const onResetClick = ()=>{
    confirm()
}
const columns = [
    { title: '', width: 62, key: 'icon', fixed: 'left' ,
    render:()=><Icon type="check-circle" />},
    { title: '收银机号', dataIndex: 'cashNo', key: 'cashNo'},
    { title: '状态', dataIndex: 'status', key: 'status'},
    { title: '最近在线时间', dataIndex: 'lastOnlineTime', key: 'lastOnlineTime'},
    { title: 'IP地址', dataIndex: 'idAddress', key: 'idAddress'},
    { title: '平台', dataIndex: 'platform', key: 'platform'},
    { title: 'API版本', dataIndex: 'apiVersion', key: 'apiVersion'},
    { title: '版本名', dataIndex: 'versionName', key: 'versionName'},
    { title: '版本号', dataIndex: 'version', key: 'version'},
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => {

            return (<a  onClick={onResetClick}>强制注销</a>)},
    },
];
const pagination = {
    defaultPageSize:10,
    pageSizeOptions:['10','20','30'],
    defaultCurrent:1,
    showSizeChanger:true,
    showQuickJumper:true
}
let data = [];

for(let i = 0 ; i < 120 ; i++){
    let d = {
        cashNo: 'John Brown',
        status: 32,
        lastOnlineTime: 'New York Park',
        idAddress: '1',
        platform: 'John Brown',
        apiVersion: 32,
        versionName:'tset',
        version: 'New York Park',
    }

    d.status = i;

    data.push(d)
}

const rowSelection = {
    fixed:true
};
const Header = ()=>(
    <div className={css.btnGroup}>
        <Button
            type="primary"
        >
            全部强制注销
        </Button>

        <Button
        >
            更新资料
        </Button>
    </div>
)
const MyTable = ()=><Table   title={Header} rowSelection={rowSelection}  columns={columns} dataSource={data}
                       pagination={pagination} bordered/>

export default MyTable
