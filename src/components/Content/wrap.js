/**
 * ligang
 */

import React from 'react';
import { Layout, Table } from 'antd';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import { connect } from 'dva';
import Cards from '../Card/card';
// import MapCard from '../Card/mapcard';
import Disc from '../Card/disc';
import Lists from '../Card/list';
import styles from '../List/list.less';

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
const { Content } = Layout;
class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: require('../image/播放.png'),
    };
    this.onPlaySong = this.onPlaySong.bind(this);
  }
  onPlaySong(r) {
    console.log(r);
    this.setState({
      pic: (this.state.pic === require('../image/播放.png') ? require('../image/暂停.png') : require('../image/播放.png')),
    });
  }
  render() {
    const { list } = this.props;
    const columns = [{
      dataIndex: 'key',
      width: 50,
      render: text => <a href="">{text}</a>,
    }, {
      title: '播放',
      dataIndex: 'play',
      width: 70,
      render: (text, record) => {
        return <img onClick={this.onPlaySong.bind(this, record)} src={this.state.pic} alt={'g'} width={'30px'} height={'30px'} />;
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
      render: text => <div>{text}</div>,
    }, {
      title: '专辑',
      dataIndex: 'albums',
    }];
    const layout = (
      <Layout>
        <Content className={styles.content}>
          <Cards />
          {/* <MapCard /> */}
          <Disc />
          <Lists />
          <Table
            dataIndex={this.props.key}
            pagination={{ pageSize: 6 }}
            columns={columns}
            dataSource={list.datas}
            scroll={{ y: 300 }}
            components={'true'}
            size={'30px'}
            style={{ borderBottom: '2px solid silver' }}
          />
        </Content>
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
  }))(Contents);
