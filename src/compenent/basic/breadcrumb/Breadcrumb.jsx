import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import React, {Component, PropTypes} from 'react'
import { Breadcrumb as AntBreadcrumb, Alert } from 'antd'
import css from './Breadcrumb.less'

const Apps = () => (
    <ul className="app-list">
        <li>
            <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
        </li>
        <li>
            <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
        </li>
    </ul>
);

const breadcrumbNameMap = {
    '/cre/cash-register-status-config': '收银机状态',
    '/cre/cash-register-configuration': '收银机配置',
    '/cre':'CRE'
};
const Breadcrumb = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const breadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <AntBreadcrumb.Item key={url} >
                <Link to={url}>
                    {breadcrumbNameMap[url]}
                </Link>
            </AntBreadcrumb.Item>
        );
    });

    return (
        <div className={css.wrap}>
            <AntBreadcrumb separator="" className={css.breadcrumbs}>
                {breadcrumbItems}
            </AntBreadcrumb>
        </div>
    );
});


export default Breadcrumb