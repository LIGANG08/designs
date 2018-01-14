/**
 * ligang
 */

import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar, Dropdown, List, Modal, Button } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import One from '../routes/one';
import Two from '../routes/two';
import Three from '../routes/three';
import Lists from '../components/List/list';
import Bottom from '../components/Footer/bottom';
import styles from './list.less';

const { Content } = Layout;

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

const playlist = (
  <Menu
    style={{ width: '250px', marginTop: '10px', marginLeft: '-2px' }}
  >
    <Menu.Item key="0">
      <div style={{ background: 'silver', margin: '10px 0', display: 'flex', alignItems: 'center' }}>
        <img
          src="http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg" alt=""
          style={{ width: '60px', height: '60px', margin: '10px' }}
        />
        <div style={{ border: '1px solid silver', marginLeft: 'px', marginTop: '', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px' }}>
          <span style={{ fontSize: '15px' }}>我喜欢的音乐</span>
          <span style={{ marginTop: '10px', fontSize: '12px', color: '#999' }}>100首</span>
        </div>
      </div>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <div style={{ background: 'silver', margin: '10px 0', display: 'flex', alignItems: 'center' }}>
        <img
          src="http://i01.pic.sogou.com/358447d676d3a67c" alt=""
          style={{ width: '60px', height: '60px', margin: '10px' }}
        />
        <div style={{ border: '1px solid silver', marginLeft: 'px', marginTop: '', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px' }}>
          <span style={{ fontSize: '15px' }}>我喜欢的音乐</span>
          <span style={{ marginTop: '10px', fontSize: '12px', color: '#999' }}>380首</span>
        </div>
      </div>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <div style={{ background: 'silver', margin: '10px 0', display: 'flex', alignItems: 'center' }}>
        <img
          src="http://i04.pic.sogou.com/a2e555b84cdbdbaa" alt=""
          style={{ width: '60px', height: '60px', margin: '10px' }}
        />
        <div style={{ border: '1px solid silver', marginLeft: 'px', marginTop: '', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px' }}>
          <span style={{ fontSize: '15px' }}>我喜欢的音乐</span>
          <span style={{ marginTop: '10px', fontSize: '12px', color: '#999' }}>10首</span>
        </div>
      </div>
    </Menu.Item>
  </Menu>
);

// const data = [
//   {
//     id: 1,
//     title: '薛之谦',
//     song: '丑八怪',
//     src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
//   },
//   {
//     id: 2,
//     title: '李荣浩',
//     song: '李白',
//     src: 'http://i01.pic.sogou.com/358447d676d3a67c',
//   },
//   {
//     id: 3,
//     title: 'PRC 巴音汗',
//     song: '80000(Prod.By DROYC)',
//     src: 'http://i04.pic.sogou.com/a2e555b84cdbdbaa',
//   },
//   {
//     id: 4,
//     title: '音阙诗听',
//     song: '红昭愿',
//     src: 'http://i02.pic.sogou.com/78ccb0feab55c76c',
//   },
// ];

class BasicLayout extends React.Component {

  constructor() {
    super();
    this.state = {
      isToggleOn: 'true',
      bot: '-110px',
      isLock: false,
      windowHeight: 0,
      windowWidth: 0,
      background: 'orange',
      selectedRowKeys: [],
      src: require('../image/playb.png'),
      pic: require('../image/unlock.png'),
      spic: require('../image/close.png'),
      number: 7,
    };
    this.BottomBar = this.BottomBar.bind(this);
    this.BottomBarLeave = this.BottomBarLeave.bind(this);
  }

  onClick() {
    this.setState({
      src: (this.state.src === require('../image/playb.png') ? require('../image/pause.png') : require('../image/playb.png')),
    });
    console.log(this.state.background);
  }

  Click() {
    this.setState({
      isLock: !this.state.isLock,
      bot: 0,
      pic: (this.state.pic === require('../image/unlock.png') ? require('../image/lock.png') : require('../image/unlock.png')),
    });
  }

  BottomBar() {
    this.setState({ bot: 0 });
  }
  BottomBarLeave() {
    this.setState({ bot: '-110px' });
  }

  sClick() {
    this.setState({
      spic: (this.state.spic === require('../image/close.png') ? require('../image/open.png') : require('../image/close.png')),
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const { music } = this.props;
    // const { musicsrc } = music;
    const layout = (
      <Layout>
        <div className={styles.header}>
          <div className={styles.logo} style={{ background: '#242424' }}>
            <a href="http://music.163.com">
              <img src="http://i03.pic.sogou.com/ed0215a1ff39103d" alt="logo" style={{ marginLeft: '10px' }} />
              <h1 style={{ marginLeft: '20px' }} >网易云音乐</h1>
            </a>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">发现音乐</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/list">我的音乐</Link></Menu.Item>
            <Menu.Item key="4"><a href="http://music.163.com/store/product">商城</a></Menu.Item>
            <Menu.Item key="5"><Link to="/musicians">音乐人</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/download">下载客户端</Link></Menu.Item>
          </Menu>
          <div style={{ border: '2px solid white', width: '200px' }} />
          <input placeholder="🔍 音乐/电台/用户" style={{ marginLeft: '30px' }} />
          <div style={{ marginLeft: '100px' }}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="/#">
                <Avatar style={{ backgroundColor: '#1890ff' }} icon="user" />
              </a>
            </Dropdown>
          </div>
        </div>
        <Layout>
          <Content className={styles.content}>
            <div className={styles.main}>
              <div className={styles.left}>
                <div style={{ border: '1px solid', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px' }}>
                  <Dropdown overlay={playlist} trigger={['click']}>
                    <a onClick={this.sClick.bind(this)} style={{ color: 'black' }}>
                      <img src={this.state.spic} alt="" style={{ width: '25px', height: '25px' }} />创建歌单({this.state.number})
                    </a>
                  </Dropdown>
                  <div>
                    <Button type="primary" style={{ background: 'gray', border: '1px solid gray' }} onClick={this.showModal}><img src={require('../image/add.png')} alt="" style={{ width: '30px', height: '30px' }} />新建</Button>
                    <Modal
                      title="新建歌单"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      mask={false}
                      cancelText="取消"
                      okText="新建"
                      bodyStyle={{ background: 'gray', height: '100px' }}
                      style={{ marginTop: '130px', textAlign: 'center' }}
                    >
                      <span>歌单名：</span><input />
                      <span style={{ color: 'silver', fontSize: '13px', position: 'absolute', top: '120px', left: '155px' }}>可以通过”收藏“将歌曲加入到歌单中</span>
                    </Modal>
                  </div>
                </div>
                <List
                  itemLayout="horizontal"
                  dataSource={music.data}
                  // dataSource={data}
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
              {/* <Switch> */}
              <Route path="/list/page2" render={() => <One />} />
              <Route path="/list/page3" render={() => <Two />} />
              <Route path="/list/page4" render={() => <Three />} />
              {/* <Route path="/two" render={() => <One />} /> */}
              <div className={styles.right} style={{ background: 'red' }}>
                <Lists />
              </div>
              {/* </Switch> */}
            </div>
          </Content>
        </Layout>
        <Bottom />
      </Layout>
    );
    return (
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}

export default connect(
  state => ({
    music: state.music,
  }))(BasicLayout);
