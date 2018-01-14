/**
 * ligang
 */

import React from 'react';
import { Layout, Icon, Divider, Table } from 'antd';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import { connect } from 'dva';
import styles from '../List/list.less';

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

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: require('../image/播放.png'),
    };
    this.onPlaySong = this.onPlaySong.bind(this);
  }

  onPlaySong(r) {
    console.log(r);
    // console.log(r.target.key);
    this.setState({
      pic: (this.state.pic === require('../image/播放.png') ? require('../image/暂停.png') : require('../image/播放.png')),
    });
  }

  render() {
    const { list } = this.props;
    console.log(list.datas, 'list');

    const columns = [{
      dataIndex: 'key',
      width: 50,
      render: text => <a href="">{text}</a>,
    }, {
      title: '播放',
      dataIndex: 'play',
      width: 70,
      render: (text, record) => {
        return <img onClick={this.onPlaySong.bind(this, record.song)} src={this.state.pic} alt={'g'} width={'30px'} height={'30px'} />;
      },
    }, {
      title: '封面',
      dataIndex: 'src',
      width: 100,
      render: text => <img src={text} alt={'g'} width={'60px'} height={'60px'} />,
    }, {
      title: '歌曲标题',
      dataIndex: 'song',
      width: 100,
      render: text => <div>{text}</div>,
    }, {
      title: '时长',
      width: 100,
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
                      <div style={{ border: '1px solid gray', background: 'silver', padding: '2px 10px', display: 'flex', alignItems: 'center' }}>
                        <img src={require('../image/playa.png')} alt="" style={{ width: '24px', height: '24px', marginLeft: '-2px', marginRight: '5px' }} />播放
                      </div>
                      <div style={{ marginLeft: '20px', border: '1px solid gray', background: 'silver', padding: '4px 10px', display: 'flex', alignItems: 'center' }}>
                        <img src={require('../image/collect.png')} alt="" style={{ width: '20px', height: '20px', marginRight: '5px' }} />收藏
                      </div>
                      <div style={{ marginLeft: '20px', border: '1px solid gray', background: 'silver', padding: '2px 10px', display: 'flex', alignItems: 'center' }}>
                        <img src={require('../image/download.png')} alt="" style={{ width: '24px', height: '24px', marginRight: '5px' }} />下载
                      </div>
                      <div style={{ marginLeft: '20px', border: '1px solid gray', background: 'silver', padding: '4px 10px', display: 'flex', alignItems: 'center' }}>
                        <img src={require('../image/share.png')} alt="" style={{ width: '20px', height: '20px', marginRight: '5px', display: 'flex', alignItems: 'center' }} />分享
                      </div>
                      <div style={{ marginLeft: '20px', border: '1px solid gray', background: 'silver', padding: '4px 10px', display: 'flex', alignItems: 'center' }}>
                        <img src={require('../image/comments.png')} alt="" style={{ width: '20px', height: '20px', marginRight: '5px' }} />评论
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: '20px', marginTop: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
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
                  pagination={{ pageSize: 6 }}
                  columns={columns}
                  dataSource={list.datas}
                  scroll={{ y: 300 }}
                  components={'true'}
                  size={'30px'}
                  // bordered={'true'}
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

export default connect(
  state => ({
    list: state.list,
  }))(Lists);
