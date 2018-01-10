/**
 * ligang
 */

import React from 'react';
// import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Input, Table, Modal, Button, Menu, Dropdown, Icon, Card, Divider } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import TweenOne from 'rc-tween-one';
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

const hot = [
  {
    src: 'http://p4.music.126.net/PVGZZELy2BX0jM__-i5dkw==/19007257509865737.jpg?param=200y200',
    srcs: 'http://p4.music.126.net/sYVoa6FSng_-gEll-Mn_Zw==/109951163104331744.jpg?param=200y200',
    pic: 'http://p4.music.126.net/6QbE9r2JeqBz3j3Kva--4A==/109951163038217098.jpg?param=200y200',
    pics: 'http://p1.music.126.net/MN2awBqf6dwKPkWd48p8nA==/109951163081971963.jpg?param=140y140',
  },
  {
    src: 'http://img.ivsky.com/img/tupian/t/201103/18/qinjin_daziran-006.jpg',
    srcs: 'http://p3.music.126.net/-Sw4EZ2CHj5QMvQTmP5mjw==/109951163099346002.jpg?param=177y177',
    pic: 'http://p4.music.126.net/eXhh2CjjqEn9KjKs8Qek1A==/18909400974912277.jpg?param=200y200',
    pics: 'http://p1.music.126.net/yUxsEGkA9_nSPgr6P7GzKg==/18645518185873305.jpg?param=140y140',
  }];

const person = [
  {
    src: 'http://p1.music.126.net/fs9-bg5-reljcOOlPqe6Gg==/109951163094225761.jpg?param=140y140',
    srcs: 'http://p1.music.126.net/0JIkWClR6VtJ5JKwEWB9HA==/18516875325525359.jpg?param=140y140',
    pic: 'http://p1.music.126.net/DEZWLLr7rr1WmuYtLJAnFw==/109951163064698079.jpg?param=140y140',
    pics: 'http://p1.music.126.net/Y6kpbxQ6C-MJqjCUnC3xdA==/109951163071182230.jpg?param=140y140',
    title: 'J·Pop丨冷门佳曲赏',
    titles: '⚡️17年12月新热电音推送',
    ptitle: '「独立女嗓 一场浮生若梦',
    ptitles: '日式少年音，温柔少年心',
  },
  {
    src: 'http://p1.music.126.net/h1VB-TbIApSkB9GavOxEfA==/109951163096063666.jpg?param=140y140',
    srcs: 'http://p1.music.126.net/H7EVdxwisIdwHiiZgAa3Wg==/18503681185978736.jpg?param=140y140',
    pic: 'http://p1.music.126.net/BtInXBZvnMN13B-ER2oVHg==/19053436998081875.jpg?param=140y140',
    pics: 'http://p1.music.126.net/kZb9DO4vykqiYEx0HHx86w==/109951163065542645.jpg?param=140y140',
    title: '【日音】2017年不容错过的100首日系良曲',
    titles: '再深的感情也抵挡不住缘分的交错',
    ptitle: '倒叙年华‖时光漫步之1987～1996',
    ptitles: '华语 | 假如能回到过去，你想做什么',
  }];

const type = [
  {
    type: '华语',
  }, {
    type: '流行',
  }, {
    type: '民谣',
  }, {
    type: '摇滚',
  }];

const style = {
  width: '150px',
  height: '30px',
  position: 'relative',
  top: '-30px',
  left: 'px',
  opacity: '0.4',
  background: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '3px 0 5px 5px',
  border: '1px solid gray',
};

const cstyle = {
  width: '45px',
  height: '45px',
  position: 'relative',
  top: '-10px',
};

const BgElement = Element.BgElement;

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
          <BannerAnim prefixCls="banner-user">
            <Element
              prefixCls="banner-user-elem"
              key="0"
            >
              <BgElement
                key="bg"
                className="bg"
                style={{
                  background: '#364D79',
                }}
              />
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                Ant Motion Banner
              </TweenOne>
              <TweenOne
                className="banner-user-text"
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
                The Fast Way Use Animation In React
              </TweenOne>
            </Element>
            <Element
              prefixCls="banner-user-elem"
              key="1"
            >
              <BgElement
                key="bg"
                className="bg"
                style={{
                  background: '#64CBCC',
                }}
              />
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                Ant Motion Banner
              </TweenOne>
              <TweenOne
                className="banner-user-text"
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
                The Fast Way Use Animation In React
              </TweenOne>
            </Element>
          </BannerAnim>
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
        <div style={{ position: 'relative', display: 'flex', alignItems: '', flexDirection: 'column', boxShadow: '5px 5px 10px silver', padding: '0 0px' }} >
          <div style={{ width: '98%', height: '50px', position: 'absolute', left: '10px', top: '10px', display: 'flex', alignItems: 'center', justifyContent: '', boxShadow: '5px 5px 10px silver', fontSize: '20px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
            {type.map((t) => {
              return (
                <div>
                  <div style={{ marginLeft: '10px', color: '#666', fontSize: '15px', padding: '5px' }}>{t.type}<Divider type="vertical" /></div>
                </div>
              );
            })}
          </div>
          <div style={{ position: 'absolute', top: '25px', right: '30px' }}>更多</div>
          <Card title="title" style={{ border: '1px solid blue', borderBottom: '1px solid red', fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600', marginTop: '70px' }}>
            {hot.map((h) => {
              return (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={h.src} alt="" style={{ width: '150px', height: '150px' }} />
                      <div style={style}>
                        <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                        <img
                          src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                          style={{ width: '45px', height: '45px', position: 'relative', top: '-10px' }}
                        />
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>闭上眼,带你穿越回2004年</div>
                    </div>
                  </Card.Grid>
                  <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={h.srcs} alt="" style={{ width: '150px', height: '150px' }} />
                      <div style={style}>
                        <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                        <img
                          src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                          style={{ width: '45px', height: '45px', position: 'relative', top: '-10px' }}
                        />
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>闭上眼,带你穿越回2004年</div>
                    </div>
                  </Card.Grid>
                  <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={h.pic} alt="" style={{ width: '150px', height: '150px' }} />
                      <div style={style}>
                        <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                        <img
                          src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                          style={{ width: '45px', height: '45px', position: 'relative', top: '-10px' }}
                        />
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>闭上眼,带你穿越回2004年</div>
                    </div>
                  </Card.Grid>
                  <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={h.pics} alt="" style={{ width: '150px', height: '150px' }} />
                      <div style={style}>
                        <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                        <img
                          src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                          style={{ width: '45px', height: '45px', position: 'relative', top: '-10px' }}
                        />
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>闭上眼,带你穿越回2004年</div>
                    </div>
                  </Card.Grid>
                </div>
              );
            })}
          </Card>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: '', flexDirection: 'column', boxShadow: '5px 5px 10px silver', padding: '0 0px' }} >
          <div style={{ width: '98%', height: '50px', position: 'absolute', left: '10px', top: '10px', display: 'flex', alignItems: 'center', justifyContent: '', boxShadow: '5px 5px 10px silver', fontSize: '20px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
            {type.map((t) => {
              return (
                <div>
                  <div style={{ marginLeft: '10px', color: '#666', fontSize: '15px', padding: '5px' }}>{t.type}<Divider type="vertical" /></div>
                </div>
              );
            })}
          </div>
          <div style={{ position: 'absolute', top: '25px', right: '30px' }}>更多</div>
          <Card title="title" style={{ border: '1px solid blue', borderBottom: '1px solid red', fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600', marginTop: '70px' }}>
            {person.map((p) => {
              return (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={p.src} alt="" style={{ width: '150px', height: '150px' }} />
                      <div style={style}>
                        <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                        <img
                          src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                          style={cstyle}
                        />
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>{p.title}</div>
                    </div>
                  </Card.Grid>
                  <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={p.srcs} alt="" style={{ width: '150px', height: '150px' }} />
                      <div style={style}>
                        <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                        <img
                          src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                          style={cstyle}
                        />
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>{p.titles}</div>
                    </div>
                  </Card.Grid>
                  <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={p.pic} alt="" style={{ width: '150px', height: '150px' }} />
                      <div style={style}>
                        <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                        <img
                          src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                          style={cstyle}
                        />
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>{p.ptitle}</div>
                    </div>
                  </Card.Grid>
                  <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={p.pics} alt="" style={{ width: '150px', height: '150px' }} />
                      <div style={style}>
                        <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                        <img
                          src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                          style={cstyle}
                        />
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>{p.ptitles}</div>
                    </div>
                  </Card.Grid>
                </div>
              );
            })}
          </Card>
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
