/**
 * ligang
 */

import React from 'react';
// import { Link, Route } from 'react-router-dom';
import { Layout, Icon, Divider, Table, Popover } from 'antd';
// import { connect } from 'dva';
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
const content = (
  <div style={{ width: '1200px', background: 'black', opacity: '0.5' }}>
    <p>Content</p>
    <p>Content</p>
  </div>
);

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
  // onClick(e) {
  //   this.setState({
  //     background: (this.state.background === 'orange' ? 'red' : 'orange'),
  //     selectedRowKeys: [],
  //     current: e.key,
  //   });

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
