/**
 * ligang
 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import styles from './Music.less';

const { Header, Sider, Content, Footer } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

// const SubMenu = Menu.SubMenu;
const { SubMenu } = Menu;

class Music extends React.Component {


  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const layout = (
      <Layout>
        <Header className={styles.header}>header
          <Icon
            className={styles.trigger}
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
          <HeaderSearch
            placeholder="站内搜索"
            dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
            onSearch={(value) => {
              console.log('input', value); // eslint-disable-line
            }}
            onPressEnter={(value) => {
              console.log('enter', value); // eslint-disable-line
            }}
          />
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          {/* <div className="logo" /> */}
        </Header>
        {/* <div className={styles.middle}> */}
        <layout>
          <Sider
            // className={styles.left}
            // onOpenChange={this.onOpenChange}
            style={{ width: '500px' }}
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className={styles.logo}>
              <a href="#/">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
                {/* <img src="http://img16.3lian.com/gif2016/q7/20/88.jpg" alt="这是一张图片" /> */}
                <h1>Ant Design Pro</h1>
              </a>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              style={{ marginTop: '10px', background: 'rgb(14, 114, 84)' }}
            >
              <SubMenu title={<span><Icon type="clock-circle-o" /><span>Dashboard</span></span>}>
                <Menu.Item key="1"><Link to="/a">分析页</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/b">监控页</Link></Menu.Item>
                <Menu.Item key="3">工作台</Menu.Item>
                {/* <Menu.Item key="4">Option 4</Menu.Item> */}
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="edit" /><span>表单页</span></span>}>
                <Menu.Item key="4" Link to="/www.baidu.com">基础表单</Menu.Item>
                <Menu.Item key="5">分步表单</Menu.Item>
                <Menu.Item key="6">高级表单</Menu.Item>
                {/* <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="8">查询表格</Menu.Item>
                  <Menu.Item key="9">标准列表</Menu.Item>
                  <Menu.Item key="8">卡片列表</Menu.Item>
                  <Menu.Item key="9">搜索列表(项目)</Menu.Item>
                  <Menu.Item key="8">搜索列表(应用)</Menu.Item>
                  <Menu.Item key="9">搜索列表(文章)</Menu.Item>
                </SubMenu> */}
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="exception" /><span>列表页</span></span>}>
                <Menu.Item key="7">查询表格</Menu.Item>
                <Menu.Item key="8">标准列表</Menu.Item>
                <Menu.Item key="9">卡片列表</Menu.Item>
                <Menu.Item key="10">搜索列表(项目)</Menu.Item>
                <Menu.Item key="11">搜索列表(应用)</Menu.Item>
                <Menu.Item key="12">搜索列表(文章)</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="layout" /><span>详情页</span></span>}>
                <Menu.Item key="13"><Link to="/pic1">图1</Link></Menu.Item>
                <Menu.Item key="14"><Link to="/pic2">图2</Link></Menu.Item>
                {/* <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item> */}
              </SubMenu>
              <SubMenu key="sub5" title={<span><Icon type="check-circle-o" /><span>结果</span></span>}>
                <Menu.Item key="15">成功</Menu.Item>
                <Menu.Item key="16">失败</Menu.Item>
                <Menu.Item key="17">Option 11</Menu.Item>
                <Menu.Item key="18">Option 12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub6" title={<span><Icon type="exclamation-circle-o" /><span>异常</span></span>}>
                <Menu.Item key="19">Option 9</Menu.Item>
                <Menu.Item key="20">Option 10</Menu.Item>
                <Menu.Item key="21">Option 11</Menu.Item>
                <Menu.Item key="22">Option 12</Menu.Item>
              </SubMenu>
              <Menu.Item key="9"><Icon type="file-text" /><a href="https://www.baidu.com/">使用文档</a></Menu.Item>
            </Menu>
          </Sider>
          <Content className={styles.content}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            {/* <img src="http://img16.3lian.com/gif2016/q7/20/88.jpg" alt="这是一张图片" /> */}
            <div className={styles.left}>
              <Switch>
                <Route path="/pic2" render={() => <img src="http://img16.3lian.com/gif2016/q7/20/88.jpg" alt="这是一张图片" />} />
                <Route path="/pic1" render={() => <img src="http://tupian.qqjay.com/u/2017/0604/1_143859_2.jpg!160x160" alt="这是一张图片" />} />
                <Route path="/b" render={() => <h3>Please select b topic.</h3>} />
              </Switch>
            </div>
            <div className={styles.cright}>
              <Switch>
                <Route path="/pic1" render={() => <img src="http://img16.3lian.com/gif2016/q7/20/88.jpg" alt="这是一张图片" />} />
                <Route path="/pic2" render={() => <img src="http://tupian.qqjay.com/u/2017/0604/1_143859_2.jpg!160x160" alt="这是一张图片" />} />
                <Route path="/b" render={() => <h3>Please select b topic.</h3>} />
              </Switch>
            </div>
          </Content>
        </layout>
        {/* </div> */}
        <Footer className={styles.footer}>
          <Switch>
            <Route path="/a" render={() => <h3>分析页</h3>} />
            <Route path="/b" render={() => <h3>监控页</h3>} />
          </Switch>
        </Footer>
      </Layout>
    );
    return (
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
export default connect()(Music);
