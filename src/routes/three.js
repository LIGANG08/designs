/**
 * ligang
 */

import React from 'react';
import { Layout, Icon, Divider, Table } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import styles from '../routes/one.less';

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
const columns = [{
  dataIndex: 'key',
  width: 50,
  render: text => <a href="">{text}</a>,
}, {
  title: '播放',
  dataIndex: 'play',
  width: 70,
  render: (text) => {
    return <img src={text} alt={'g'} width={'35px'} height={'35px'} />;
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
  render: text => <div style={{ marginLeft: 'px' }}>{text}</div>,
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

class Three extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const three = (
      <Layout>
        <Content className={styles.content}>
          <div className={styles.main}>
            <div className={styles.right}>
              <div className={styles.top}>
                <img src="http://i02.pic.sogou.com/78ccb0feab55c76c" alt="this is pic" style={{ width: '200px', height: '200px', margin: '20px' }} />
                <div className={styles.top_right}>
                  <div style={{ border: '', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={require('../image/a.png')} alt="" style={{ width: '80px', height: '30px' }} />
                    <span style={{ position: 'absolute', left: '630px', top: '34px', fontSize: '15px' }}>歌单</span>
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
                // selectedRowKeys
                pagination={{ pageSize: 6 }}
                columns={columns}
                dataSource={datas}
                scroll={{ y: 300 }}
                components={'true'}
                size={'30px'}
                // bordered={'true'}
              />
            </div>
          </div>
        </Content>
      </Layout>
    );
    return (
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{three}</div>}
      </ContainerQuery>
    );
  }
  }

export default connect()(Three);

