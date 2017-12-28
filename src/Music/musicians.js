/**
 * ligang
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Divider, Avatar, Dropdown, List, Carousel } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import styles from '../Music/musicians.less';

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
  title: '播放',
  dataIndex: 'src',
  render: text => <img src={text} alt={'g'} width={'60px'} height={'60px'} />,
  // render: text => <a href="/#">{text}</a>,
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
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '2',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '李白',
  time: '04:12',
  autor: '李荣浩',
  albums: '《李白》',
}, {
  key: '3',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '80000(Prod.By DROYC)',
  time: '01:48',
  autor: 'PRC 巴音汗',
  albums: '《80000(Prod.By DROYC)》',
}, {
  key: '4',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '5',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '6',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '7',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '8',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '9',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '10',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}];


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

const list = [
  {
    title: '薛之谦',
    song: '丑八怪',
    src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
    pic: 'picppppppppp',
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
  {
    title: '1',
  },
  {
    title: '2',
  },
  {
    title: '3',
  },
  {
    title: '4',
  },
  {
    title: '5',
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
          {/* <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs> */}
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
            <p
              className={styles.p}
              style={{
                direction: 'down',
                fontSize: '60px',
                scrolldelay: '1000',
                overflow: '-webkit-marquee' }}
            >Musicians
            </p>
            <div className={styles.marquee} style={{ marginTop: '280px' }}> <div> <span>ONE LOVE ONE HEART Musicians</span> </div> <div aria-hidden="true"> <span>ONE LOVE ONE HEART</span> </div> </div>
            <div className={styles.main}>
              {/* <Carousel vertical autoplay>
                <div><img src="http://p1.music.126.net/uqVB0u2spm_t0OUAdvXbCQ==/18493785580103375.jpg" alt="pic'" /></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
              </Carousel> */}
              {/* <Carousel style={{ display: 'flex', flexDirection: 'column' }} vertical autoplay>
                <div><img src="http://p1.music.126.net/G74l8fFdzZ555qNPiN0ozw==/19073228207509877.jpg" alt="这是一张图片" style={{ height: '100%' }} /></div>
                <div><img src="http://p1.music.126.net/spNFpLdrcZvie1XDfn60Iw==/19208468137739021.jpg" alt="这是一张图片" style={{ height: '100%' }} /></div>
                <div><img src="http://p1.music.126.net/vvZLXI5EqFLsKLlvfqz0uA==/19088621370291879.jpg" alt="这是一张图片" style={{ height: '100%' }} /></div>
                <div><img src="http://p1.music.126.net/Gj92V72Sl8u2z6EhLaGF6Q==/19182079858662886.jpg" alt="这是一张图片" style={{ height: '100%' }} /></div>
              </Carousel> */}
              {/* <div className={styles.left}>
                <List
                    // style={{ color: 'white' }}
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        // style={{ width: '100%' }}
                        avatar={<Avatar src={item.src} />}
                        title={<a className={styles.title} href="https://ant.design" style={{ color: 'wheat' }}>{item.title}</a>}
                        description={<span style={{ color: 'white' }}>{item.song}</span>}
                      />
                    </List.Item>
                    )}
                />
              </div> */}
            </div>
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
