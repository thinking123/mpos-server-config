import React from 'react'
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

let wrap = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const ComponentLoadingSpinner = () => (
    <div style={wrap}>
        <Spin indicator={antIcon} />
    </div>)

export default ComponentLoadingSpinner