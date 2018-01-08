/**
 * ligang
 */

import React from 'react';
import { Layout, Icon, Divider, Table } from 'antd';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import styles from '../List/list.less';

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
  width: 50,
  render: text => <a href="">{text}</a>,
}, {
  title: '播放',
  dataIndex: 'play',
  width: 70,
  // render: text => <img src={text} alt={'g'} width={'60px'} height={'60px'} />,
  render: (text) => {
    return <img src={text} alt={'g'} width={'35px'} height={'35px'} style={{ marginLeft: 'px' }} />;
  },
}, {
  title: '封面',
  dataIndex: 'src',
  width: 100,
  render: text => <img src={text} alt={'g'} width={'60px'} height={'60px'} style={{ marginLeft: 'px' }} />,
}, {
  title: '歌曲标题',
  dataIndex: 'song',
  width: 100,
  render: text => <div style={{ marginLeft: 'px' }}>{text}</div>,
}, {
  title: '时长',
  width: 100,
  // className: 'column-money',
  dataIndex: 'time',
}, {
  title: '歌手',
  dataIndex: 'autor',
  width: 100,
  render: text => <div style={{ marginLeft: 'px' }}>{text}</div>,
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
// const content = (
//   <div style={{ width: '1200px', background: 'black', opacity: '0.5' }}>
//     <p>Content</p>
//     <p>Content</p>
//   </div>
// );

class Lists extends React.Component {

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
    this.BottomBar = this.BottomBar.bind(this);
    this.BottomBarLeave = this.BottomBarLeave.bind(this);
  }

  // componentWillMount() {
  //   this.setState({
  //     windowWidth: document.querySelector('body').offsetWidth,
  //     windowHeight: document.querySelector('body').offsetHeight,
  //   });
  // }

  BottomBar() {
    this.setState({ bot: 0 });
  }
  BottomBarLeave() {
    this.setState({ bot: '-90px' });
  }

  render() {
    const layout = (
      <Layout>
        <Layout>
          <Content className={styles.content}>
            <div className={styles.main}>
              <div className={styles.right}>
                <div className={styles.top}>
                  <img src="http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg" alt="this is pic" style={{ width: '200px', height: '200px', margin: '20px' }} />
                  <div className={styles.top_right}>
                    <div style={{ border: '', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <img src={require('../image/a.png')} alt="" style={{ width: '80px', height: '30px' }} />
                      <span style={{ position: 'absolute', left: '290px', top: '38px', fontSize: '15px' }}>歌单</span>
                      <div style={{ marginLeft: '10px', fontSize: '20px', color: 'black' }}>我喜欢的音乐🎵</div>
                      <div style={{ marginLeft: '160px' }}>编辑</div>
                    </div>
                    <div style={{ border: '', marginTop: '20px' }}>
                      <img src={require('../image/a.jpeg')} alt="" style={{ width: '40px', height: '40px', marginRight: '20px' }} />
                      用户名:<a style={{ color: '#1890ff' }}>Beautiful_sky________</a> 2017-1-7 创建
                    </div>
                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                      <div style={{ border: '1px solid gray', background: 'silver', padding: '5px 10px' }}>
                        <img
                          src={require('../image/play.png')} alt=""
                          style={{ width: '25px', height: '25px', marginLeft: '-2px', marginRight: '5px' }}
                        />播放
                      </div>
                      <div style={{ marginLeft: '20px', border: '1px solid gray', background: 'silver', padding: '5px 10px' }}>
                        <img src={require('../image/collect.png')} alt="" style={{ width: '20px', height: '20px', marginRight: '5px' }} />收藏
                      </div>
                      <div style={{ marginLeft: '20px', border: '1px solid gray', background: 'silver', padding: '5px 10px' }}>下载</div>
                      <div style={{ marginLeft: '20px', border: '1px solid gray', background: 'silver', padding: '5px 10px' }}>分享</div>
                      <div style={{ marginLeft: '20px', border: '1px solid gray', background: 'silver', padding: '5px 10px' }}>评论</div>
                    </div>
                  </div>
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
                  // style={{ width: '100%' }}
                  dataIndex={this.props.key}
                  selectedRowKeys
                  // {this.state.isToggleOn ? 'ON' : 'OFF'}
                  pagination={{ pageSize: 6 }}
                  columns={columns}
                  dataSource={datas}
                  scroll={{ y: 300 }}
                  components={'true'}
                  size={'30px'}
                  bordered={'true'}
                  // title={() => 'Header'}
                  // footer={() => 'Footer'}
                />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
    return (
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}

export default Lists;
