/**
 * ligang
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar, Carousel, Dropdown, List } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import Footers from '../components/Footer/footer';
import Contents from '../components/Content/wrap';
import styles from './Music.less';
import Bottom from '../components/Footer/bottom';
import Siders from '../components/Sider/sider';

const { Sider, Content, Footer } = Layout;

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

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"><Icon type="smile-o" style={{ marginRight: '10px' }} />我的主页</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"><Icon type="aliwangwang-o" style={{ marginRight: '10px' }} />我的消息</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/"><Icon type="setting" style={{ marginRight: '10px' }} />个人设置</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/"><Icon type="poweroff" style={{ marginRight: '10px' }} />退出</a>
    </Menu.Item>
  </Menu>
);

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: 'true', data: [] };
    this.handleClick = this.handleClick.bind(this);
  }
  // componentWillMount() {
  //   this.setState({
  //     data: this.props.music.data,
  //   });
  // }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { music } = this.props;
    const { musicsrc } = music;
    console.log(music.musicsrc, 'move');
    console.log(music, 'src');
    console.log(this.props.musicsrc, 'move');
    const layout = (
      <Layout>
        <div className={styles.header}>
          <div className={styles.logo} style={{ background: '#242424' }}>
            <a href="http://music.163.com">
              <img src="http://i03.pic.sogou.com/ed0215a1ff39103d" alt="logo" style={{ margin: '10px' }} />
              <h1>网易云音乐</h1>
            </a>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">发现音乐</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/list">我的音乐</Link></Menu.Item>
            <Menu.Item key="4">商城</Menu.Item>
            <Menu.Item key="5"><Link to="/musicians">音乐人</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/download">下载客户端</Link></Menu.Item>
          </Menu>
          <div style={{ border: '2px solid white', width: '200px' }} />
          <input placeholder="🔍 音乐/电台/用户" style={{ marginLeft: '30px' }} />
          <div style={{ marginLeft: '100px' }}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="/#">
                <Avatar style={{ backgroundColor: '#1890ff' }} icon="user" />
              </a>
            </Dropdown>
          </div>
        </div>
        <Layout>
          <Sider
            className={styles.sider}
            style={{ background: 'black' }}
          >
            <Siders />
          </Sider>
          <Content className={styles.content}>
            <div className={styles.main}>
              <div className={styles.top}>
                <Carousel classname={styles.move} autoplay={{ second: '3s' }}>
                  <img src={music.musicsrc} alt="" />
                  {
                    musicsrc.map(item =>
                      <img
                        src={item.src}
                        alt=""
                        style={{ height: '450px' }}
                      />,
                    )
                  }
                </Carousel>
                <svg className={styles.svgc}>
                  <polygon
                    points="0,0 1000,450 100,50 "
                    style={{ fill: '#cccccc', strokeWidth: '1' }}
                  />
                </svg>
                <svg className={styles.svga}>
                  <polygon points="0,100 90,90 100,0 110,90 200,100 110,110 100,200 90,110" style={{ fill: '#cccccc' }} />
                </svg>
                <span style={{ position: 'absolute', top: '180px', left: '312px', zIndex: '1000', color: '#000000' }}>🎵</span>
                <svg className={styles.svgb}>
                  <polygon points="0,100 90,90 100,0 110,90 200,100 110,110 100,200 90,110" style={{ fill: '#cccccc', strokeWidth: '1' }} />
                </svg>
                <span style={{ position: 'absolute', top: '180px', left: '1072px', zIndex: '1000', color: '#000000' }}>🎵</span>
              </div>
              <div className={styles.wrap}>
                <Contents />
              </div>
            </div>
            <div className={styles.right}>猜你喜欢
              {/* <hr /> */}
              <List
                onClick={this.onlist}
                itemLayout="horizontal"
                dataSource={music.data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.src} />}
                      title={<a className={styles.title} href="https://ant.design" style={{ color: 'wheat' }}>{item.title}</a>}
                      description={<span style={{ color: 'white' }}>{item.song}</span>}
                    />
                  </List.Item>
                )}
              />
            </div>
          </Content>
        </Layout>
        <Footer className={styles.footer}>
          <Footers />
        </Footer>
        <Bottom />
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
    music: state.music,
  }))(BasicLayout);
