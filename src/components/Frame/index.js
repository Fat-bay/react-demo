import React, { Component } from 'react'
import {
  Layout,
  Menu,
  Icon
} from 'antd'

import { withRouter } from 'react-router-dom'
import './frame.less'
import logo from './logo.png'

const { Header, Content, Sider } = Layout

//装饰器模式 要紧跟着class
@withRouter
class Frame extends Component {
  onMenuClick=({ key }) => {
    this.props.history.push(key)
  }
    render() {
      const selectedKeyArr = this.props.location.pathname.split('/')
      selectedKeyArr.length=3
      // console.log(selectedKeysArr)
        return (
            <Layout style={{minHeight:'100%'}}>
             <Header className="header qf-header">
              <div className="qf-logo">
                <img src={logo} alt="QFADMIN" />
              </div>
             </Header>
            <Layout>
             <Sider width={200} style={{backgroundColor:'#fff'}}>
              <Menu
                mode="inline"
                selectedKeys={[selectedKeyArr.join('/')]}
                onClick={this.onMenuClick}
                style={{ height: '100%', borderRight: 0 }}
              >
                {
                  this.props.menus.map(item => {
                    return (
                    <Menu.Item key={item.pathname}>
                      <Icon type={item.icon} />
                      {item.title}
                    </Menu.Item>
                    )
                  })
                }
              </Menu>
             </Sider>
             <Layout style={{ padding: '16px' }}>
              <Content
               className="site-layout-background"
               style={{
                 backgroundColor:'#fff',
                 padding: 24,
                 margin: 0
               }}
              >
               {this.props.children}
              </Content>
             </Layout>
            </Layout>
          </Layout>
        )
    }
}

export default Frame