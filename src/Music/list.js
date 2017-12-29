/**
 * ligang
 */

import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon, Divider, Avatar, Dropdown, List, Table, Popover } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import One from '../Music/one';
import Two from '../Music/two';
import Three from '../Music/three';
import Lists from '../components/list';
import styles from '../Music/list.less';

const { Content, Footer } = Layout;
// const TabPane = Tabs.TabPane;
// const Search = Input.Search;

// function callback(key) {
//   console.log(key);
// }

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
const columns = [{
  dataIndex: 'key',
  // render: text => <a href="">{text}</a>,
}, {
  title: '播放',
  dataIndex: 'play',
  // render: text => <img src={text} alt={'g'} width={'60px'} height={'60px'} />,
  render: (text) => {
    return <img src={text} alt={'g'} width={'30px'} height={'30px'} />;
  },
}, {
  title: 'image',
  dataIndex: 'src',
  render: text => <img src={text} alt={'g'} width={'60px'} height={'60px'} />,
}, {
  title: '歌曲标题',
  dataIndex: 'song',
  render: text => <a href="/#">{text}</a>,
}, {
  title: '时长',
  // className: 'column-money',
  dataIndex: 'time',
}, {
  title: '歌手',
  dataIndex: 'autor',
}, {
  title: '专辑',
  dataIndex: 'albums',
}];

const datas = [{
  key: '1',
  play: require('../image/play.png'),
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
  background: 'this.state.background',
}, {
  key: '2',
  play: require('../image/play.png'),
  src: 'http://i01.pic.sogou.com/358447d676d3a67c',
  song: '李白',
  time: '04:12',
  autor: '李荣浩',
  albums: '《李白》',
}, {
  key: '3',
  play: require('../image/play.png'),
  src: 'http://i04.pic.sogou.com/a2e555b84cdbdbaa',
  song: '80000(Prod.By DROYC)',
  time: '01:48',
  autor: 'PRC 巴音汗',
  albums: '《80000(Prod.By DROYC)》',
}, {
  key: '4',
  play: require('../image/play.png'),
  src: 'http://i02.pic.sogou.com/78ccb0feab55c76c',
  song: '红昭愿',
  time: '04:26',
  autor: '音阙诗听',
  albums: '《红昭愿》',
}, {
  key: '5',
  play: require('../image/play.png'),
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '6',
  play: require('../image/play.png'),
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '7',
  play: require('../image/play.png'),
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '8',
  play: require('../image/play.png'),
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '9',
  play: require('../image/play.png'),
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '10',
  play: require('../image/play.png'),
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}];


const data = [
  {
    id: 1,
    title: '薛之谦',
    song: '丑八怪',
    src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  },
  {
    id: 2,
    title: '李荣浩',
    song: '李白',
    src: 'http://i01.pic.sogou.com/358447d676d3a67c',
  },
  {
    id: 3,
    title: 'PRC 巴音汗',
    song: '80000(Prod.By DROYC)',
    src: 'http://i04.pic.sogou.com/a2e555b84cdbdbaa',
  },
  {
    id: 4,
    title: '音阙诗听',
    song: '红昭愿',
    src: 'http://i02.pic.sogou.com/78ccb0feab55c76c',
  },
];

const content = (
  <div style={{ width: '1200px', background: 'black', opacity: '0.5' }}>
    <p>Content</p>
    <p>Content</p>
  </div>
);
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
// const { SubMenu } = Menu;
// const gridStyle = {
//   width: '25%',
//   textAlign: 'center',
// };

class BasicLayout extends React.Component {


  // state = {
  //   collapsed: false,
  // };
  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // }


  constructor() {
    super();
    this.state = {
      isToggleOn: 'true',
      bot: '-90px',
      windowHeight: 0,
      windowWidth: 0,
      background: 'orange',
      selectedRowKeys: [],
    };
    // 特别注意这一行语句
    // this.handleClick = this.handleClick.bind(this);
    this.BottomBar = this.BottomBar.bind(this);
    this.BottomBarLeave = this.BottomBarLeave.bind(this);
  }

  componentWillMount() {
    this.setState({
      windowWidth: document.querySelector('body').offsetWidth,
      windowHeight: document.querySelector('body').offsetHeight,
    });
  }

  // handleClick() {
  //   console.log('ok');
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn,
  //   }));
  // }
  onClick(e) {
    this.setState({
      background: (this.state.background === 'orange' ? 'red' : 'orange'),
      selectedRowKeys: [],
      current: e.key,
    });
    console.log(this.state.background);
  }

  BottomBar() {
    this.setState({ bot: 0 });
  }
  BottomBarLeave() {
    this.setState({ bot: '-90px' });
  }

  render() {
    const layout = (
      <Layout>
        <div className={styles.header}>
          <div className={styles.logo} style={{ background: '#242424' }}>
            <a href="http://music.163.com">
              <img src="http://i03.pic.sogou.com/ed0215a1ff39103d" alt="logo" />
              <h1>网易云音乐</h1>
            </a>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">发现音乐</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/list">我的音乐</Link></Menu.Item>
            {/* <Menu.Item key="3"><Link to="/pic2">朋友</Link></Menu.Item> */}
            <Menu.Item key="4"><a href="http://music.163.com/store/product">商城</a></Menu.Item>
            <Menu.Item key="5"><Link to="/musicians">音乐人</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/download">下载客户端</Link></Menu.Item>
          </Menu>
          <div style={{ border: '2px solid white', width: '200px' }} />
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
          {/* <Search
            placeholder="🔍   音乐/电台/用户"
            onSearch={value => console.log(value)}
            enterButton
          /> */}
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
          <Content className={styles.content}>
            {/* <div className={styles.main}> */}
            <div className={styles.main}>
              <div className={styles.left}>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item.src} />}
                        title={<Link to={`/list/page${item.id}`} className={styles.title} style={{ color: 'wheat' }}>{item.title}</Link>}
                        description={<span style={{ color: 'white' }}>{item.song}</span>}
                      />
                    </List.Item>
                  )}
                />
              </div>
              <Switch>
                <Route path="/list/page2" render={() => <One />} />
                <Route path="/list/page3" render={() => <Two />} />
                <Route path="/list/page" render={() => <Three />} />
                {/* <Route path="/two" render={() => <One />} /> */}
                <div className={styles.right}>
                  {/* <Switch> */}
                  {/* <Route path="/b" render={() => <h3>监控页</h3>} /> */}
                  {/* </Switch> */}
                  <div className={styles.top}>
                    {/* <img src={require('../image/play.png')} alt="this is pic" style={{ width: '200px', height: '200px', margin: '20px' }} /> */}
                    <img src="http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg" alt="this is pic" style={{ width: '200px', height: '200px', margin: '20px' }} />
                    我的音乐🎵
                  </div>
                  <div style={{ fontSize: '20px', marginTop: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
                    {/* <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />歌曲列表 */}
                    <Icon type="bars" style={{ margin: '10px', color: '#C10D0C' }} />歌曲列表
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
                    <a href="/#" style={{ float: 'right', marginRight: '10px', lineHeight: '35px', color: '#333', fontSize: '15px' }}>播放：6次</a>
                  </div>
                  <Table
                    onClick={this.onClick.bind(this)}
                    dataIndex={this.props.key}
                    selectedRowKeys
                    // {this.state.isToggleOn ? 'ON' : 'OFF'}
                    pagination={{ pageSize: 6 }}
                    columns={columns}
                    dataSource={datas}
                    bordered
                    // title={() => 'Header'}
                    footer={() => 'Footer'}
                  />
                </div>
              </Switch>
            </div>
            <Lists />
          </Content>
        </Layout>
        <Footer className={styles.footer}>
          <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
            {/* <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />热门推荐 */}
            <Divider type="vertical" />
            <a href="/#" style={{ color: '#666', fontSize: '15px' }}><span>关于网易</span></a>
            <Divider type="vertical" />
            <a href="/#" style={{ color: '#666', fontSize: '15px' }}><span>客户服务</span></a>
            <Divider type="vertical" />
            <a href="/#" style={{ color: '#666', fontSize: '15px' }}><span>服务条款</span></a>
            <Divider type="vertical" />
            <a href="/#" style={{ color: '#666', fontSize: '15px' }}><span>网站导航</span></a>
            <Divider type="vertical" />
            <a href="/#" style={{ color: '#666', fontSize: '15px' }}><span>意见反馈</span></a>
            <Divider type="vertical" />
            <a href="/#" style={{ color: '#666', fontSize: '15px' }}><span>版权所有@ligang</span></a>
            <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
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
          <Popover content={content} >
            <div style={{ border: '1px solid black' }}>Hover</div>
          </Popover>
          <div onMouseOver={this.BottomBar} onMouseLeave={this.BottomBarLeave} style={{ height: '100px', width: '93%', background: 'black', opacity: '0.5', position: 'fixed', bottom: this.state.bot, transition: 'bottom 1s' }}>
            <p style={{ color: 'wheat', float: 'right', right: '10px' }}>Content</p>
            <div style={{ border: '1px solid red' }}>
              <img src={require('../image/play.png')} alt="this is pic" style={{ width: '40px', height: '40px', marginTop: '0px' }} />
            </div>
            <p>Content</p>
          </div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
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

export default connect()(BasicLayout);
