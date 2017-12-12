// /**
//  * ligang
//  */

// import React from 'react';
// import { Layout, Menu, Carousel, Icon } from 'antd';
// import { Switch, Route, Link } from 'react-router-dom';
// import { connect } from 'dva';
// import { ContainerQuery } from 'react-container-query';
// import classNames from 'classnames';
// import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
// import styles from './Music.less';

// const { Sider, Content, Footer } = Layout;
// const { SubMenu } = Menu;

// const query = {
//   'screen-xs': {
//     maxWidth: 575,
//   },
//   'screen-sm': {
//     minWidth: 576,
//     maxWidth: 767,
//   },
//   'screen-md': {
//     minWidth: 768,
//     maxWidth: 991,
//   },
//   'screen-lg': {
//     minWidth: 992,
//     maxWidth: 1199,
//   },
//   'screen-xl': {
//     minWidth: 1200,
//   },
// };

// // const users = [
// //   { username: 'Jerry', age: 21, gender: 'male' },
// //   { username: 'Tomy', age: 22, gender: 'male' },
// //   { username: 'Lily', age: 19, gender: 'female' },
// //   { username: 'Lucy', age: 20, gender: 'female' },
// // ];
// // const { Content, Footer } = Layout;
// class Music extends React.Component {


//   state = {
//     collapsed: false,
//   };
//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   }

//   render() {
//     const layout = (
//       // for (let user of users) {
//       //   usersElements.push( // 循环每个用户，构建 JSX，push 到数组中
//       //     <div>
//       //       <div>姓名：{user.username}</div>
//       //       <div>年龄：{user.age}</div>
//       //       <div>性别：{user.gender}</div>
//       //       <hr />
//       //     </div>
//       //   )
//       // }
//       <Layout className={styles.wrap}>
//         <div className={styles.header}>header
//           <h1 className={styles.hlogo}>
//             <img
//               src="http://i03.pic.sogou.com/ed0215a1ff39103d" alt="logo"
//               style={{ width: '40px', height: '40px', margin: '0 10px' }}
//             />
//             网易云音乐
//           </h1>
//           <Menu
//             theme="dark"
//             mode="horizontal"
//             defaultSelectedKeys={['2']}
//             style={{ lineHeight: '64px' }}
//           >
//             <Menu.Item key="1"><Link to="/a">发现音乐</Link></Menu.Item>
//             <Menu.Item key="2"><Link to="/pic1">我的音乐</Link></Menu.Item>
//             <Menu.Item key="3"><Link to="/pic2">朋友</Link></Menu.Item>
//             <Menu.Item key="4">商城</Menu.Item>
//             <Menu.Item key="5">音乐人</Menu.Item>
//             <Menu.Item key="6">下载客户端</Menu.Item>
//           </Menu>
//           <HeaderSearch
//             style={{ marginTop: '16px', marginLeft: '20px' }}
//             placeholder="🔍   音乐/电台/用户"
//             dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
//             onSearch={(value) => {
//               console.log('input', value); // eslint-disable-line
//             }}
//             onPressEnter={(value) => {
//               console.log('enter', value); // eslint-disable-line
//             }}
//           />
//         </div>
//         <Content className={styles.content}>
//           <div className={styles.cleft}>cleft
//           </div>
//           <div className={styles.middle}>
//             {/* <Switch>
//               <Route path="/pic1" render={() => <img src="http://img16.3lian.com/gif2016/q7/20/88.jpg" alt="这是一张图片" />} />
//               <Route path="/pic2" render={() => <img src="http://tupian.qqjay.com/u/2017/0604/1_143859_2.jpg!160x160" alt="这是一张图片" />} />
//               <Route
//                 path="/a" render={() =>
//                   <Carousel classname={styles.move} autoplay>
//                     <div><img src="http://p1.music.126.net/G74l8fFdzZ555qNPiN0ozw==/19073228207509877.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
//                     <div><img src="http://p1.music.126.net/1Tmj-CGIPDeXmD_jhxWf6Q==/18686200116173908.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
//                     <div><img src="http://p1.music.126.net/636CVrb94tiJ7xG2iKZhDw==/18945684858708438.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
//                     <div><img src="http://p1.music.126.net/q7vXLOOAqxJAQqPAt_Brgg==/19182079858662861.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
//                   </Carousel>
//                   }
//               />
//             </Switch> */}
//           </div>
//           <div className={styles.right}>right</div>
//         </Content>
//         <Footer className={styles.footer}>footer</Footer>
//       </Layout>
//     );
//     return (
//       <div>
//         <ContainerQuery query={query}>
//           {params => <div className={classNames(params)}>{layout}</div> }
//         </ContainerQuery>
//         {/* <div>{usersElements}</div> */}
//       </div>
//     );
//   }
// }
// export default connect()(Music);

/**
 * ligang
 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Carousel, Card } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import styles from './Music.less';

const { Sider, Content, Footer } = Layout;

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
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

class BasicLayout extends React.Component {


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
        <div className={styles.header}>
          <div className={styles.logo} style={{ background: '#242424' }}>
            <a href="http://music.163.com">
              <img src="http://i03.pic.sogou.com/ed0215a1ff39103d" alt="logo" style={{ margin: '10px' }} />
              <h1>网易云音乐</h1>
            </a>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/m">发现音乐</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/pic1">我的音乐</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/pic2">朋友</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/right">商城</Link></Menu.Item>
            <Menu.Item key="5">音乐人</Menu.Item>
            <Menu.Item key="6">下载客户端</Menu.Item>
          </Menu>
          <HeaderSearch
            // style={{ marginTop: '16px', marginLeft: '20px' }}
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
        <Layout>
          {/* </Header> */}
          <Sider
            className={styles.sider}
            style={{ background: 'black' }}
          >
            <Menu
              theme="dark"
              mode="inline"
              style={{ marginTop: '10px', background: 'black' }}
            >
              <SubMenu title={<span><Icon type="clock-circle-o" /><span>推荐</span></span>}>
                <Menu.Item key="1"><Link to="/a">发现音乐</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/b">私人FM</Link></Menu.Item>
                <Menu.Item key="3">MV</Menu.Item>
                {/* <Menu.Item key="4">Option 4</Menu.Item> */}
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="edit" /><span>我的音乐</span></span>}>
                <Menu.Item key="4" Link to="/www.baidu.com">本地音乐</Menu.Item>
                <Menu.Item key="5">下载管理</Menu.Item>
                <Menu.Item key="6">我的歌手</Menu.Item>
                <Menu.Item key="6">我的电台</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="exception" /><span>创建的歌单</span></span>}>
                <Menu.Item key="7">我喜欢的音乐</Menu.Item>
                <Menu.Item key="8">标准列表</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="layout" /><span>我的收藏</span></span>}>
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
            <div className={styles.main}>main
              <div className={styles.top}>top
                {/* <Carousel classname={styles.move} autoplay>
                  <div><img src="http://p1.music.126.net/G74l8fFdzZ555qNPiN0ozw==/19073228207509877.jpg" alt="这是一张图片" style={{ width: '80%' }} /></div>
                  <div><img src="http://p1.music.126.net/1Tmj-CGIPDeXmD_jhxWf6Q==/18686200116173908.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
                  <div><img src="http://p1.music.126.net/636CVrb94tiJ7xG2iKZhDw==/18945684858708438.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
                  <div><img src="http://p1.music.126.net/q7vXLOOAqxJAQqPAt_Brgg==/19182079858662861.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
                </Carousel> */}
                {/* <Switch>
                  <Route path="/pic1" render={() => <img src="http://img16.3lian.com/gif2016/q7/20/88.jpg" alt="这是一张图片" />} />
                  <Route path="/pic2" render={() => <img src="http://tupian.qqjay.com/u/2017/0604/1_143859_2.jpg!160x160" alt="这是一张图片" />} />
                  <Route
                    path="/m" render={() =>
                      <Carousel classname={styles.move} autoplay>
                        <div><img src="http://p1.music.126.net/G74l8fFdzZ555qNPiN0ozw==/19073228207509877.jpg" alt="这是一张图片" style={{ width: '80%' }} /></div>
                        <div><img src="http://p1.music.126.net/1Tmj-CGIPDeXmD_jhxWf6Q==/18686200116173908.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
                        <div><img src="http://p1.music.126.net/636CVrb94tiJ7xG2iKZhDw==/18945684858708438.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
                        <div><img src="http://p1.music.126.net/q7vXLOOAqxJAQqPAt_Brgg==/19182079858662861.jpg" alt="这是一张图片" style={{ width: '100%' }} /></div>
                      </Carousel>
                      }
                  />
                </Switch> */}
              </div>
              <div className={styles.wrap}>
                <Card title="Card Title">
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                </Card>
              </div>
              {/* <Switch>
                <Route path="/pic1" render={() => <img src="http://img16.3lian.com/gif2016/q7/20/88.jpg" alt="这是一张图片" />} />
                <Route path="/pic2" render={() => <img src="http://tupian.qqjay.com/u/2017/0604/1_143859_2.jpg!160x160" alt="这是一张图片" />} />
                <Route path="/b" render={() => <h3>Please select b topic.</h3>} />
              </Switch> */}
            </div>
            <div className={styles.right}>right
              <Switch>
                <Route path="/right" render={() => <img src="http://img16.3lian.com/gif2016/q7/20/88.jpg" alt="这是一张图片" />} />
                <Route path="/pic2" render={() => <img src="http://tupian.qqjay.com/u/2017/0604/1_143859_2.jpg!160x160" alt="这是一张图片" />} />
                <Route path="/m" render={() => <h3>Please select b topic.</h3>} />
              </Switch>
              <img src="http://tupian.qqjay.com/u/2017/0604/1_143859_2.jpg!160x160" alt="这是一张图片" />
            </div>
          </Content>
        </Layout>
        <Footer className={styles.footer}>
          <Switch>
            <Route path="/a" render={() => <h3>分析页</h3>} />
            <Route path="/b" render={() => <h3>监控页</h3>} />
          </Switch>
        </Footer>
        {/* </Layout> */}
      </Layout>
    );
    return (
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
export default connect()(BasicLayout);

