/**
 * ligang
 */

import React from 'react';
// import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Input, Table } from 'antd';
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
      isPlay: false,
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

  onPlaySong(r, index) {
    console.log(r);
    console.log(index);
    if (index === 0) {
      // throw new Error('event cannot be undefined');
      console.log(index);
    }
    // console.log(r.target.key);
    this.setState({
      pic: (this.state.pic === require('../image/playb.png') ? require('../image/pause.png') : require('../image/playb.png')),
    });
  }

  // this.play = () => {
  //   if (!this.player) {
  //     return false;
  //   }
  //   if (this.player.readyState === 4 && !this.player.ended) {
  //     this.player.play();
  //   }
  // };
  // // 暂停
  // this.pause = () => {
  //   if (this.player) {
  //     this.player.pause();
  //   }
  // };

  onClick(word, e) {
    console.log('ok');
    console.log(e.target.innerHTML);
    console.log(this);
    console.log(this, word);
    console.log(this.state.background);
  }


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
      render: (text, record, index) => {
        return <img id={index} onClick={this.onPlaySong.bind(this, index)} src={this.state.pic} alt={'g'} width={'30px'} height={'30px'} />;
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
          <audio controls={'true'} id="483671599" src={'http://music.163.com/song/media/outer/url?id=26662115.mp3'}>播放</audio>
          <div>
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
          <Table
            // onClick={this.pClick.bind(this, datas.key)}
            dataIndex={this.state.key}
            style={{ background: 'this.state.background' }}
            selectedRowKeys
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
          >光
            您的浏览器不支持 audio 标签。
          </audio>
          <i
            className={this.state.isPlay ? 'pause' : 'play'}
            onClick={() => this.controlAudio(this.state.isPlay ? 'pause' : 'play')}
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
