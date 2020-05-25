import React from 'react'
import { render } from 'react-dom'
import { HashRouter  as Router, Route, Switch, Redirect } from 'react-router-dom'

import zhCN from 'antd/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'antd'

import App from './App'

import { mainRoutes } from './routes'

import './index.less'

render(
    <LocaleProvider locale={zhCN}>
    <Router>
        <Switch>
            <Route path="/admin" render={(routerProps) => {
                //TODO：权限，需要登录才能访问/admin
                return <App {...routerProps} />
            }} />
            {
                mainRoutes.map(route => {
                    return <Route key={route.pathname} path={route.pathname} component={route.component} />
                })
            }
        </Switch>
        {/* 这里设置默认打开浏览器的页面 */}
        <Redirect to="/admin" from="/" exact />
        {/* <Redirect to="/404" /> */}
        <Redirect to="/admin/article" /> 
    </Router>
    </LocaleProvider>,
    document.querySelector('#root')
)