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
      src: require('../image/playb.png'),
      pic: require('../image/unlock.png'),
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

  render() {
    const bottom = this.state.isLock ? 0 : this.state.bot;
    const layout = (
      <Layout>
        <div onMouseOver={this.BottomBar} onMouseLeave={this.BottomBarLeave} style={{ height: '120px', width: '100%', background: 'black', opacity: '0.5', position: 'fixed', left: '0', bottom, transition: 'bottom 1s' }}>
          <img onClick={this.Click.bind(this)} src={this.state.pic} style={{ color: this.state.color, float: 'right', right: '10px', width: '30px', height: '30px' }} alt="" />
          <div style={{ border: '1px solid red' }}>
            <img onClick={this.onClick.bind(this)} src={this.state.src} alt="this is pic" style={{ width: '40px', height: '40px', marginTop: '20px', marginLeft: '150px' }} />
          </div>
          <audio
            controls={'true'}
            id={`audio${26662115}`}
            src={'http://music.163.com/song/media/outer/url?id=26662115.mp3'}
            preload={'true'}
          >s
          </audio>
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
