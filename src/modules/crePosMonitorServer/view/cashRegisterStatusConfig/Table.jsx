import { Table ,Icon} from 'antd';
import React, { Component } from 'react';

const columns = [
    { title: '', width: 100, key: 'icon', fixed: 'left' ,
    render:()=><Icon type="check-circle" />},
    { title: '收银机号', dataIndex: 'cashNo'},
    { title: '状态', dataIndex: 'status'},
    { title: '最近在线时间', dataIndex: 'lastOnlineTime'},
    { title: 'IP地址', dataIndex: 'idAddress'},
    { title: '平台', dataIndex: 'platform'},
    { title: 'API版本', dataIndex: 'apiVersion'},
    { title: '版本名', dataIndex: 'versionName'},
    { title: '版本号', dataIndex: 'version'},
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href="#">action</a>,
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

const MyTable = ()=><Table columns={columns} dataSource={data}
                       pagination={pagination} />
console.log('muta' , MyTable)
export default MyTable
