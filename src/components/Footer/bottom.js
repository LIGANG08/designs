/**
 * ligang
 */

import React from 'react';
import { Layout, Modal, List, Progress } from 'antd';

const data = [{
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

class Bottom extends React.Component {

  constructor() {
    super();
    this.state = {
      bot: '-75px',
      up: require('../image/up.png'),
      play: require('../image/playb.png'),
      lock: require('../image/unlock.png'),
      next: require('../image/next.png'),
      visible: false,
    };
    this.BottomBar = this.BottomBar.bind(this);
    this.BottomBarLeave = this.BottomBarLeave.bind(this);
  }

  onClick() {
    this.setState({
      play: (this.state.play === require('../image/playb.png') ? require('../image/pause.png') : require('../image/playb.png')),
    });
    console.log(this.state.background);
  }

  Click() {
    this.setState({
      isLock: !this.state.isLock,
      bot: 0,
      lock: (this.state.lock === require('../image/unlock.png') ? require('../image/lock.png') : require('../image/unlock.png')),
    });
  }

  BottomBar() {
    this.setState({ bot: 0 });
  }

  BottomBarLeave() {
    this.setState({ bot: '-75px' });
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

  // listclick() {
  //   this.setState
  // }

  render() {
    const bottom = this.state.isLock ? 0 : this.state.bot;
    const layout = (
      <Layout>
        <div
          onMouseOver={this.BottomBar}
          onMouseLeave={this.BottomBarLeave}
          style={{
            border: '2px solid gray',
            height: '80px',
            width: '100%',
            background: 'black',
            opacity: '0.8',
            position: 'fixed',
            left: '0',
            bottom,
            transition: 'bottom 0.5s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ position: 'absolute', right: '10px', top: '5px', border: '1px solid gray', boxShadow: '0 0 5px silver' }}>
            <img onClick={this.Click.bind(this)} src={this.state.lock} style={{ color: this.state.color, width: '15px', height: '15px' }} alt="" />
          </div>
          <div style={{ border: '1px solid', display: 'flex', alignItems: 'center' }}>
            <div style={{ border: '1px solid', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img onClick={this.onClick.bind(this)} src={this.state.up} alt="this is pic" style={{ width: '30px', height: '30px' }} />
              <img onClick={this.onClick.bind(this)} src={this.state.play} alt="this is pic" style={{ width: '35px', height: '35px', marginLeft: '20px' }} />
              <img onClick={this.onClick.bind(this)} src={this.state.next} alt="this is pic" style={{ width: '30px', height: '30px', marginLeft: '20px' }} />
            </div>
            <div style={{ border: '1px solid gray', color: 'silver', marginLeft: '50px' }}>
              <img src="http://i01.pic.sogou.com/358447d676d3a67c" alt="this is pic" style={{ width: '40px', height: '40px' }} />
            </div>
            <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center', width: '500px' }}>
              <Progress percent={50} showInfo={false} status="active" style={{ background: 'black' }} />
            </div>
            <div style={{ color: 'silver', marginLeft: '0px', padding: '0 20px 0 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ }}>
                <img src={require('../image/collects.png')} alt="" style={{ width: '30px', height: '30px' }} />
              </div>
              <div style={{ marginLeft: '20px' }}>
                <img src={require('../image/shares.png')} alt="" style={{ width: '30px', height: '30px' }} />
              </div>
            </div>
            <div style={{ color: 'silver', marginLeft: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div>
                <img src={require('../image/voice.png')} alt="" style={{ width: '30px', height: '30px' }} />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <img src={require('../image/random.png')} alt="" style={{ width: '30px', height: '30px' }} />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <img onClick={this.showModal} src={require('../image/list.png')} alt="" style={{ width: '30px', height: '30px' }} />
                <Modal
                  title="播放列表"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  footer={false}
                  mask={false}
                  style={{ marginTop: '300px' }}
                  bodyStyle={{ background: 'black' }}
                >
                  <List
                    size="large"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                  />
                  <div style={{ height: '300px', width: '500px', background: 'black' }}>s</div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
    return (
      <div>
        {layout}
      </div>
    );
  }
}

export default Bottom;
