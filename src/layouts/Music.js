/**
 * ligang
 */

import React from 'react';
import { Layout, Menu, Carousel } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import styles from './Music.less';

// const { Header, Sider, Content, Footer } = Layout;

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

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' },
];
const { Content, Footer } = Layout;
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
      // map () {
      //   usersElements.push( // 循环每个用户，构建 JSX，push 到数组中
      //     <div>
      //       <div>姓名：{user.username}</div>
      //       <div>年龄：{user.age}</div>
      //       <div>性别：{user.gender}</div>
      //       <hr />
      //     </div>
      //   )
      // }
      <Layout>
        <div className={styles.header}>header
          <h1 className={styles.hlogo}>
            <img
              src="http://i03.pic.sogou.com/ed0215a1ff39103d" alt="logo"
              style={{ width: '40px', height: '40px', margin: '0 10px' }}
            />
            网易云音乐
          </h1>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/a">发现音乐</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/pic1">我的音乐</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/pic2">朋友</Link></Menu.Item>
            <Menu.Item key="4">商城</Menu.Item>
            <Menu.Item key="5">音乐人</Menu.Item>
            <Menu.Item key="6">下载客户端</Menu.Item>
          </Menu>
          <HeaderSearch
            style={{ marginTop: '16px', marginLeft: '20px' }}
            placeholder="🔍   音乐/电台/用户"
            dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
            onSearch={(value) => {
              console.log('input', value); // eslint-disable-line
            }}
            onPressEnter={(value) => {
              console.log('enter', value); // eslint-disable-line
            }}
          />
        </div>
        <Content className={styles.middle}>
          <Switch>
            <Route path="/pic1" render={() => <img src="http://img16.3lian.com/gif2016/q7/20/88.jpg" alt="这是一张图片" />} />
            <Route path="/pic2" render={() => <img src="http://tupian.qqjay.com/u/2017/0604/1_143859_2.jpg!160x160" alt="这是一张图片" />} />
            <Route
              path="/a" render={() =>
                <Carousel classname={styles.move} autoplay>
                  <div><img src="http://p1.music.126.net/G74l8fFdzZ555qNPiN0ozw==/19073228207509877.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
                  <div><img src="http://p1.music.126.net/1Tmj-CGIPDeXmD_jhxWf6Q==/18686200116173908.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
                  <div><img src="http://p1.music.126.net/636CVrb94tiJ7xG2iKZhDw==/18945684858708438.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
                  <div><img src="http://p1.music.126.net/q7vXLOOAqxJAQqPAt_Brgg==/19182079858662861.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
                </Carousel>
                }
            />
          </Switch>
        </Content>
        <Footer className={styles.footer}>footer</Footer>
      </Layout>
    );
    return (
      <div>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div> }
        </ContainerQuery>
        {/* <div>{usersElements}</div> */}
      </div>
    );
  }
}
export default connect()(Music);
