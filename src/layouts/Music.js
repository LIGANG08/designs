/**
 * ligang
 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Carousel, Card, Divider, Avatar, Dropdown, Tabs, List } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import styles from './Music.less';

const { Sider, Content, Footer } = Layout;
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

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

const box = [
  {
    box: 1,
  },
  {
    box: 2,
  },
];

const data = [
  {
    title: '薛之谦',
    song: '丑八怪',
    src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  },
  {
    title: '李荣浩',
    song: '李白',
    src: 'http://i01.pic.sogou.com/358447d676d3a67c',
  },
  {
    title: 'PRC 巴音汗',
    song: '80000(Prod.By DROYC)',
    src: 'http://i04.pic.sogou.com/a2e555b84cdbdbaa',
  },
  {
    title: '音阙诗听',
    song: '红昭愿',
    src: 'http://i02.pic.sogou.com/78ccb0feab55c76c',
  },
];

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"><Icon type="smile-o" style={{ marginRight: '10px' }} />我的主页</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"><Icon type="aliwangwang-o" style={{ marginRight: '10px' }} />我的消息</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/"><Icon type="setting" style={{ marginRight: '10px' }} />个人设置</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/"><Icon type="poweroff" style={{ marginRight: '10px' }} />退出</a>
    </Menu.Item>
  </Menu>
);


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
            {/* <Menu.Item key="3"><Link to="/pic2">朋友</Link></Menu.Item> */}
            <Menu.Item key="4"><Link to="/right">商城</Link></Menu.Item>
            <Menu.Item key="5">音乐人</Menu.Item>
            <Menu.Item key="6">下载客户端</Menu.Item>
          </Menu>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
          <HeaderSearch
            // style={{ marginTop: '16px', marginLeft: '20px' }}
            className={styles.Search}
            placeholder="🔍   音乐/电台/用户"
            dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
            onSearch={(value) => {
              console.log('input', value); // eslint-disable-line
            }}
            onPressEnter={(value) => {
              console.log('enter', value); // eslint-disable-line
            }}
          />
          <div style={{ marginLeft: '100px' }}>
            {/* <Avatar icon="user" /> */}
            {/* <Avatar>U</Avatar>
            <Avatar>USER</Avatar> */}
            {/* <Avatar src="http://img01.sogoucdn.com/app/a/100520093/803d8006b5d521bb-2eb356b9e8bc4ae6-44161463e36a0cba1f9b67ac4cf56432.jpg" /> */}
            {/* <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar> */}
            {/* <Avatar style={{ backgroundColor: '#87d068' }} icon="user" /> */}
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="/#">
                <Avatar style={{ backgroundColor: '#1890ff' }} icon="user" />
                {/* <Avatar src="http://img01.sogoucdn.com/app/a/100520093/803d8006b5d521bb-2eb356b9e8bc4ae6-44161463e36a0cba1f9b67ac4cf56432.jpg" /> */}
                {/* <Icon type="down" /> */}
                {/* <Icon type="caret-down" style={{ marginLeft: '10px' }} /> */}
                {/* <Icon type="down-square-o" /> */}
              </a>
            </Dropdown>
          </div>
        </div>
        <Layout>
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
            {/* <Carousel classname={styles.move} autoplay>
              <div><img src="http://p1.music.126.net/G74l8fFdzZ555qNPiN0ozw==/19073228207509877.jpg" alt="这是一张图片" /></div>
              <div><img src="http://p1.music.126.net/1Tmj-CGIPDeXmD_jhxWf6Q==/18686200116173908.jpg" alt="这是一张图片" /></div>
              <div><img src="http://p1.music.126.net/636CVrb94tiJ7xG2iKZhDw==/18945684858708438.jpg" alt="这是一张图片" /></div>
              <div><img src="http://p1.music.126.net/q7vXLOOAqxJAQqPAt_Brgg==/19182079858662861.jpg" alt="这是一张图片" /></div>
            </Carousel> */}
            <div className={styles.main}>
              <div className={styles.top}>
                <Carousel classname={styles.move} autoplay>
                  <div><img src="http://p1.music.126.net/G74l8fFdzZ555qNPiN0ozw==/19073228207509877.jpg" alt="这是一张图片" /></div>
                  <div><img src="http://p1.music.126.net/1Tmj-CGIPDeXmD_jhxWf6Q==/18686200116173908.jpg" alt="这是一张图片" /></div>
                  <div><img src="http://p1.music.126.net/636CVrb94tiJ7xG2iKZhDw==/18945684858708438.jpg" alt="这是一张图片" /></div>
                  <div><img src="http://p1.music.126.net/q7vXLOOAqxJAQqPAt_Brgg==/19182079858662861.jpg" alt="这是一张图片" /></div>
                </Carousel>
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
                <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
                  <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />热门推荐
                  <Divider type="vertical" />
                  <a href="/#" style={{ color: '#666', fontSize: '15px' }}>华语</a>
                  <Divider type="vertical" />
                  <a href="/#" style={{ color: '#666', fontSize: '15px' }}>流行</a>
                  <Divider type="vertical" />
                  <a href="/#" style={{ color: '#666', fontSize: '15px' }}>摇滚</a>
                  <Divider type="vertical" />
                  <a href="/#" style={{ color: '#666', fontSize: '15px' }}>民谣</a>
                  <Divider type="vertical" />
                  <a href="/#" style={{ color: '#666', fontSize: '15px' }}>电子</a>
                  <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
                </div>
                <Card title="Card Title" style={{ borderBottom: '1px solid red' }}>
                  <div style={gridStyle}>Content</div>
                  <div style={gridStyle}>Content</div>
                  <div style={gridStyle}>Content</div>
                  <div style={gridStyle}>Content</div>
                  <div style={gridStyle}>Content</div>
                  <List
                    itemLayout="horizontal"
                    dataSource={box}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          // avatar={<Avatar src={item.src} />}
                          // title={<a href="https://ant.design">{item.title}</a>}
                          description={item.box}
                        />
                      </List.Item>
                    )}
                  />
                  {/* <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid> */}
                </Card>
                <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
                  <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />个性化推荐
                  {/* <Divider type="vertical" />
                  <a href="/#">Link</a>
                  <Divider type="vertical" />
                  <a href="/#">Link</a> */}
                  <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
                </div>
                <Card title="Card Title">
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                </Card>
                <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
                  <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />新碟推荐
                  {/* <Divider type="vertical" />
                  <a href="/#">Link</a>
                  <Divider type="vertical" />
                  <a href="/#">Link</a> */}
                  <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
                </div>
                <Card title="Card Title">
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                  <Card.Grid style={gridStyle}>Content</Card.Grid>
                </Card>
                <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
                  <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />榜单
                  {/* <Divider type="vertical" />
                  <a href="/#" style={{ color: 'silver' }}>Link</a>
                  <Divider type="vertical" />
                  <a href="/#">Link</a> */}
                  <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
                </div>
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
            <div className={styles.right}>猜你喜欢
              {/* <Switch>
                <Route path="/right" render={() => <img src="http://img16.3lian.com/gif2016/q7/20/88.jpg" alt="这是一张图片" />} />
                <Route path="/pic2" render={() => <img src="http://tupian.qqjay.com/u/2017/0604/1_143859_2.jpg!160x160" alt="这是一张图片" />} />
                <Route path="/m" render={() => <h3>Please select b topic.</h3>} />
              </Switch>
              <img src="http://tupian.qqjay.com/u/2017/0604/1_143859_2.jpg!160x160" alt="这是一张图片" /> */}
              <List
                // style={}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.src} />}
                      title={<a href="https://ant.design">{item.title}</a>}
                      description={item.song}
                    />
                  </List.Item>
                )}
              />
            </div>
          </Content>
        </Layout>
        <Footer className={styles.footer}>
          <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
            {/* <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />热门推荐 */}
            <Divider type="vertical" />
            <a href="/#" style={{ color: '#666', fontSize: '15px' }}>关于网易</a>
            <Divider type="vertical" />
            <a href="/#" style={{ color: '#666', fontSize: '15px' }}>客户服务</a>
            <Divider type="vertical" />
            <a href="/#" style={{ color: '#666', fontSize: '15px' }}>服务条款</a>
            <Divider type="vertical" />
            <a href="/#" style={{ color: '#666', fontSize: '15px' }}>网站导航</a>
            <Divider type="vertical" />
            <a href="/#" style={{ color: '#666', fontSize: '15px' }}>意见反馈</a>
            <Divider type="vertical" />
            <a href="/#" style={{ color: '#666', fontSize: '15px' }}>版权所有@ligang</a>
            <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
            {/* <span>版权部分</span> */}
          </div>
          <div>
            <Avatar style={{ marginLeft: '10px', backgroundColor: '#C10D0C' }} />
            <Avatar style={{ marginLeft: '10px', backgroundColor: '#87d068' }} />
            <Avatar style={{ marginLeft: '10px', backgroundColor: '#C10D0C' }} />
            <Avatar style={{ marginLeft: '10px', backgroundColor: '#87d068' }} />
          </div>
          {/* <Switch>
            <Route path="/a" render={() => <h3>分析页</h3>} />
            <Route path="/b" render={() => <h3>监控页</h3>} />
          </Switch> */}
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

