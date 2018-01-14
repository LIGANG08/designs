/**
 * ligang
 */

import React from 'react';
// import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Table, Modal, Button } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import 'rc-banner-anim/assets/index.css';

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
  constructor(props) {
    super(props);
    this.state = {
      src: require('../image/play.png'),
      pic: require('../image/playb.png'),
      visible: false,
    };
    this.onPlaySong = this.onPlaySong.bind(this);
  }

  onPlaySong(r) {
    console.log(r);
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


  render() {
    const columns = [{
      dataIndex: 'key',
      render: text => <a href="">{text}</a>,
    }, {
      title: '播放',
      dataIndex: 'play',
      render: (text, record) => {
        return <img onClick={this.onPlaySong.bind(this, record)} src={this.state.pic} alt={'g'} width={'30px'} height={'30px'} />;
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
    const layout = (
      <Layout>
        <Content>
          <Table
            // onClick={this.pClick.bind(this, datas.key)}
            dataIndex={this.state.key}
            style={{ background: 'this.state.background' }}
            selectedRowKeys
            pagination={{ pageSize: 6 }}
            columns={columns}
            dataSource={datas}
            bordered
            footer={() => 'Footer'}
          />
        </Content>
        <div>
          <Button type="primary" onClick={this.showModal}>Open</Button>
          <img onClick={this.showModal} src="http://i01.pic.sogou.com/358447d676d3a67c" alt="" style={{ width: '30px', height: '30px' }} />
          <Modal
            title="播放列表"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            mask={false}
            footer={false}
            // bodyStyle={{ background: 'black' }}
            maskStyle={{ background: 'black' }}
          >
            {/* <div style={{ width: '500px', height: '250px' }}>s</div> */}
            <Table
            // onClick={this.pClick.bind(this, datas.key)}
              dataIndex={this.state.key}
              style={{ background: 'this.state.background', marginTop: '130px', textAlign: 'center'  }}
              selectedRowKeys
              pagination={false}
              columns={columns}
              dataSource={datas}
              bordered
            />
          </Modal>
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
