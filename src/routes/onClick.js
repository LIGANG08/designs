/**
 * ligang
 */

import React from 'react';
// import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Input, Table, Modal, Button, Menu, Dropdown, Icon, Card } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import styles from './onClick.less';


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

const datas = [{
  key: 1,
  play: require('../image/play.png'),
  src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
  song: '丑八怪',
  url: 'http://music.163.com/song/media/outer/url?id=483671599.mp3',
}, {
  key: 2,
  play: require('../image/play.png'),
  src: 'http://i01.pic.sogou.com/358447d676d3a67c',
  song: '李白',
  url: 'http://music.163.com/song/media/outer/url?id=26662115.mp3',
}, {
  key: 3,
  play: require('../image/play.png'),
  src: 'http://i04.pic.sogou.com/a2e555b84cdbdbaa',
  song: '80000(Prod.By DROYC)',
  url: 'http://music.163.com/song/media/outer/url?id=476592630.mp3',
}];

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

// const boxs = [
//   {
//     name: 'box1',
//   },
//   {
//     name: 'box2',
//   },
//   {
//     name: 'box3',
//   },
//   {
//     name: 'box4',
//   }];

class BasicLayout extends React.Component {
  // state = {
  //   collapsed: false,
  // };
  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // }
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: 'true',
      bot: '-90px',
      background: 'orange',
      status: 'orange',
      color: 'red',
      src: require('../image/play.png'),
      pic: require('../image/playb.png'),
      visible: false,
    };
    // 特别注意这一行语句
    // this.handleClick = this.handleClick.bind(this);
    // this.pClick = this.pClick.bind(this);
    this.onPlaySong = this.onPlaySong.bind(this);
  }
  // handleClick() {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn,
  //   }));
  //   console.log(this);
  // }

  onClick(word, e) {
    console.log('ok');
    console.log(e.target.innerHTML);
    console.log(this);
    console.log(this, word);
    console.log(this.state.background);
    // this.state.background:'red';
    // this.setState({ background: 'blue' });
    // setTimeout((function() {
    //   this.setState({ progress: 1 + (0.4 * Math.random()) });
    // }).bind(this), 1000);
  }

  onPlaySong(r) {
    console.log(r);
    // console.log(r.target.key);
    this.setState({
      pic: (this.state.pic === require('../image/playb.png') ? require('../image/pause.png') : require('../image/playb.png')),
      isPlay: !this.state.isPlay,
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


  // controlAudio() {
  //   const { key, url } = this.props;
  //   console.log(url.target.innerHTML);
  //   console.log(this.key);
  //   // const audio = document.getElementById(`audio${id}`);
  // }

  // handleClick() {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn,
  //   }));
  //   console.log(this);
  // }

  pClick(event) {
    // this.state.background:'red';
    // this.setState({ background: 'orange' ? 'red' : 'orange' });
    // this.setState({
    //   status: (this.state.status === 'orange' ? 'red' : 'orange'),
    // });
    this.setState({
      background: (this.state.background === 'orange' ? 'red' : 'orange'),
      src: (this.state.src === require('../image/play.png') ? require('../image/y.png') : require('../image/play.png')),
      rtitle: event.target.value,
      progress: 1,
    });
    // alert(this.state.rtitle);
    console.log(this.state.background);
    console.log(this.state.src);
    console.log(this.state.progress);
  }

  render() {
    const columns = [{
      dataIndex: 'key',
      // render: text => <a href="">{text}</a>,
    }, {
      title: '播放',
      dataIndex: 'play',
      // render: text => <img src={text} alt={'g'} width={'60px'} height={'60px'} />,
      render: (text, record) => {
        // return <img onClick={() => this.onPlaySong(record, record.key)} src={(record.play === require('../image/play.png') ? require('../image/play.png') : require('../image/pause.png'))} alt={'g'} width={'60px'} height={'60px'} />;
        return <img onClick={this.onPlaySong.bind(this, record.song)} src={this.state.pic} alt={'g'} width={'30px'} height={'30px'} />;
      },
    }, {
      title: 'image',
      dataIndex: 'src',
      render: text => <img src={text} alt={'g'} width={'60px'} height={'60px'} />,
    }, {
      title: '歌曲标题',
      dataIndex: 'song',
      render: text => <a href="/#">{text}</a>,
    }];
    setTimeout(() => {
      this.setState({ progress: (0.4 * Math.random()) });
    }, 1000);
    // setTimeout(alert('对不起, 要你久候'), 3000);
    // setInterval( pClick, 1000);
    const layout = (
      <Layout>
        <Content>
          {/* <audio id="audio" src={'http://music.163.com/song/media/outer/url?id=26662115.mp3'}>播放</audio> */}
          <div>
            {/* <progress progress={this.state.progress} /> */}
            <div className={styles.progress}>
              <span className={styles.start} />
              <div className={styles.progressbar}>
                <div className={styles.now} />{this.state.progress}s
              </div>
              <span className={styles.end} />
            </div>
            {/* {this.state.progress}s */}
          </div>
          <div>
            <Input type="text" value={this.state.rtitle} onChange={this.textChange} />
          </div>
          <button onClick={this.pClick.bind(this)}>{ this.state.background }</button>
          <p style={{ marginTop: '20px', marginLeft: '20px', background: this.state.background }}>按钮</p>
          <img onClick={this.pClick.bind(this)} src={this.state.src} alt="pic" />
          <Dropdown overlay={menu} trigger={['click']}>
            <a>
              <Icon type="down" />创建歌单
            </a>
          </Dropdown>
          <Table
            // onClick={this.pClick.bind(this, datas.key)}
            dataIndex={this.state.key}
            style={{ background: 'this.state.background' }}
            selectedRowKeys
            // {this.state.isToggleOn ? 'ON' : 'OFF'}
            pagination={{ pageSize: 6 }}
            columns={columns}
            dataSource={datas}
            bordered
            // title={() => 'Header'}
            footer={() => 'Footer'}
          />
        </Content>
        <div className="audioBox" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px', background: 'silver' }}>
          <audio
            controls={'true'}
            // currentTime={'1000'}
            id={`audio${483671599}`}
            src={'http://music.163.com/song/media/outer/url?id=483671599.mp3'}
            // preload={'true'}
            // onCanPlay={() => this.controlAudio('allTime')}
            // onTimeUpdate={(e) => this.controlAudio('getCurrentTime')}
          >光
            您的浏览器不支持 audio 标签。
          </audio>
          <i
            className={this.state.isPlay ? 'pause' : 'play'}
            // onClick={() => this.controlAudio(this.state.isPlay ? 'pause' : 'play')}
          />
          <audio
            controls={'true'}
            id={`audio${26662115}`}
            src={'http://music.163.com/song/media/outer/url?id=26662115.mp3'}
            preload={'true'}
            // onCanPlay={() => this.controlAudio('allTime')}
            // onTimeUpdate={(e) => this.controlAudio('getCurrentTime')}
          >
            您的浏览器不支持 audio 标签。
          </audio>
          <audio
            controls={'true'}
            id={`audio${476592630}`}
            src={'http://music.163.com/song/media/outer/url?id=476592630.mp3'}
            preload={'true'}
            // onCanPlay={() => this.controlAudio('allTime')}
            // onTimeUpdate={(e) => this.controlAudio('getCurrentTime')}
          >
            您的浏览器不支持 audio 标签。
          </audio>
        </div>
        <div className={styles.progress}>
          <span className={styles.start} />
          <div className={styles.progressbar}>
            <div className={styles.now} />
          </div>
          <span className={styles.end} />
        </div>
        <div>
          <Button type="primary" onClick={this.showModal}>Open</Button>
          <Modal
            title="新建歌单"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            cancelText="取消"
            okText="新建"
            bodyStyle={{ background: 'gray', height: '100px' }}
            style={{ marginTop: '130px', textAlign: 'center' }}
          >
            <span>歌单名：</span><input />
            <span style={{ color: 'silver', fontSize: '13px', position: 'absolute', top: '120px', left: '155px' }}>可以通过”收藏“将歌曲加入到歌单中</span>
          </Modal>
        </div>
        {/* {boxs.map((b) => {
          return (
            <div>{b.name}</div>
            <Card>
              <Card.Grid style={gridStyle}></Card.Grid>
            </Card>
          );
        })} */}
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
