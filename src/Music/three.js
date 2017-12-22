/**
 * ligang
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Divider, Avatar, Dropdown, List, Table } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
// import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import styles from '../Music/one.less';

const { Content } = Layout;
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
  render: text => <text>{text}</text>,
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
  play: '▶️',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '2',
  play: '▶️',
  src: 'http://i01.pic.sogou.com/358447d676d3a67c',
  song: '李白',
  time: '04:12',
  autor: '李荣浩',
  albums: '《李白》',
}, {
  key: '3',
  play: '▶️',
  src: 'http://i04.pic.sogou.com/a2e555b84cdbdbaa',
  song: '80000(Prod.By DROYC)',
  time: '01:48',
  autor: 'PRC 巴音汗',
  albums: '《80000(Prod.By DROYC)》',
}, {
  key: '4',
  play: '▶️',
  src: 'http://i02.pic.sogou.com/78ccb0feab55c76c',
  song: '红昭愿',
  time: '04:26',
  autor: '音阙诗听',
  albums: '《红昭愿》',
}, {
  key: '5',
  play: '▶️',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '6',
  play: '▶️',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '7',
  play: '▶️',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '8',
  play: '▶️',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '9',
  play: '▶️',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}, {
  key: '10',
  play: '▶️',
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  time: '04:26',
  autor: '薛之谦',
  albums: '《意外》',
}];


const data = [
  { id: 1,
    title: '薛之谦',
    song: '丑八怪',
    src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  },
  { id: 2,
    title: '李荣浩',
    song: '李白',
    src: 'http://i01.pic.sogou.com/358447d676d3a67c',
  },
  { id: 3,
    title: 'PRC 巴音汗',
    song: '80000(Prod.By DROYC)',
    src: 'http://i04.pic.sogou.com/a2e555b84cdbdbaa',
  },
  { id: 4,
    title: '音阙诗听',
    song: '红昭愿',
    src: 'http://i02.pic.sogou.com/78ccb0feab55c76c',
  },
];

// const list = [
//   {
//     title: '薛之谦',
//     song: '丑八怪',
//     src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
//     pic: 'picppppppppp',
//   },
//   {
//     title: '李荣浩',
//     song: '李白',
//     src: 'http://i01.pic.sogou.com/358447d676d3a67c',
//   },
//   {
//     title: 'PRC 巴音汗',
//     song: '80000(Prod.By DROYC)',
//     src: 'http://i04.pic.sogou.com/a2e555b84cdbdbaa',
//   },
//   {
//     title: '音阙诗听',
//     song: '红昭愿',
//     src: 'http://i02.pic.sogou.com/78ccb0feab55c76c',
//   },
//   {
//     title: '薛之谦',
//     song: '丑八怪',
//     src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
//   },
//   {
//     title: '李荣浩',
//     song: '李白',
//     src: 'http://i01.pic.sogou.com/358447d676d3a67c',
//   },
//   {
//     title: 'PRC 巴音汗',
//     song: '80000(Prod.By DROYC)',
//     src: 'http://i04.pic.sogou.com/a2e555b84cdbdbaa',
//   },
//   {
//     title: '音阙诗听',
//     song: '红昭愿',
//     src: 'http://i02.pic.sogou.com/78ccb0feab55c76c',
//   },
//   {
//     title: '1',
//   },
//   {
//     title: '2',
//   },
//   {
//     title: '3',
//   },
//   {
//     title: '4',
//   },
//   {
//     title: '5',
//   },
// ];

// const menu = (
//   <Menu>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"><Icon type="smile-o" style={{ marginRight: '10px' }} />我的主页</a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"><Icon type="aliwangwang-o" style={{ marginRight: '10px' }} />我的消息</a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/"><Icon type="setting" style={{ marginRight: '10px' }} />个人设置</a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/"><Icon type="poweroff" style={{ marginRight: '10px' }} />退出</a>
//     </Menu.Item>
//   </Menu>
// );


// const SubMenu = Menu.SubMenu;
// const { SubMenu } = Menu;
// const gridStyle = {
//   width: '25%',
//   textAlign: 'center',
// };

class Three extends React.Component {
  // render() {
  //   return (
  //     <div>hello
  //       <img src="http://i01.pic.sogou.com/358447d676d3a67c" alt="this is pic" style={{ width: '200px', height: '200px', margin: '20px' }} />
  //     </div>
  //   );
  // }

  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const three = (
      <Layout>
        <Content className={styles.content}>
          {/* <div className={styles.main}> */}
          <div className={styles.main}>
            <div className={styles.right}>
              <div className={styles.top}>
                {/* <img src="http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg" alt="this is pic" style={{ width: '200px', height: '200px', margin: '20px' }} /> */}
                <img src="http://i02.pic.sogou.com/78ccb0feab55c76c" alt="this is pic" style={{ width: '200px', height: '200px', margin: '20px' }} />
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
                pagination={{ pageSize: 6 }}
                columns={columns}
                dataSource={datas}
                bordered
                // title={() => 'Header'}
                footer={() => 'Footer'}
              />
            </div>
          </div>
        </Content>
        {/* <Switch>
          <Route path="/a" render={() => <h3>分析页</h3>} />
          <Route path="/b" render={() => <h3>监控页</h3>} />
        </Switch> */}
      </Layout>
    );
    return (
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{three}</div>}
      </ContainerQuery>
    );
  }
  }
export default connect()(Three);

