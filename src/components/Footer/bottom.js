/**
 * ligang
 */

import React from 'react';
import { Layout } from 'antd';

class Bottom extends React.Component {

  constructor() {
    super();
    this.state = {
      bot: '-90px',
      play: require('../image/playb.png'),
      lock: require('../image/unlock.png'),
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
    this.setState({ bot: '-110px' });
  }

  render() {
    const bottom = this.state.isLock ? 0 : this.state.bot;
    const layout = (
      <Layout>
        <div
          onMouseOver={this.BottomBar}
          onMouseLeave={this.BottomBarLeave}
          style={{
            height: '120px',
            width: '100%',
            background: 'black',
            opacity: '0.5',
            position: 'fixed',
            left: '0',
            bottom,
            transition: 'bottom 1s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ border: '1px solid silver' }}>
            <img onClick={this.Click.bind(this)} src={this.state.lock} style={{ color: this.state.color, float: 'right', right: '10px', width: '15px', height: '15px', boxShadow: ' 2px 2px 5px silver' }} alt="" />
          </div>
          <div style={{ border: '1px solid red', display: 'flex', alignItems: 'center' }}>
            <div style={{ border: '1px solid blue', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img onClick={this.onClick.bind(this)} src={this.state.play} alt="this is pic" style={{ width: '20px', height: '20px', marginTop: '0px', marginLeft: '0px' }} />
              <img onClick={this.onClick.bind(this)} src={this.state.play} alt="this is pic" style={{ width: '40px', height: '40px', marginTop: '0px', marginLeft: '30px' }} />
              <img onClick={this.onClick.bind(this)} src={this.state.play} alt="this is pic" style={{ width: '20px', height: '20px', marginTop: '0px', marginLeft: '30px' }} />
            </div>
            <div style={{ border: '1px solid orange', color: 'silver', width: '700px' }}>
              <img src="http://i01.pic.sogou.com/358447d676d3a67c" alt="this is pic" style={{ width: '50px', height: '50px', margin: '20px' }} />
            </div>
            <div style={{ color: 'silver', borderRight: '2px solid silver', paddingRight: '20px', boxShadow: ' 0px 0px 2px silver' }}>收藏,分享</div>
            <div style={{ color: 'silver', marginLeft: '20px' }}>列表</div>
          </div>
          {/* <audio
            controls={'true'}
            id={`audio${26662115}`}
            src={'http://music.163.com/song/media/outer/url?id=26662115.mp3'}
            preload={'true'}
          >s
          </audio> */}
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
