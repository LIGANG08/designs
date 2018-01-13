/**
 * ligang
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Menu } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

class Siders extends React.Component {
  render() {
    const layout = (
      <Layout>
        <Sider
          style={{ background: 'rgb(15, 15, 14)' }}
        >
          <Menu
            theme="dark"
            mode="inline"
            style={{ marginTop: '10px', background: 'rgb(15, 15, 14)', color: 'siver', padding: '10px' }}
          >
            <SubMenu title={<span><Icon type="clock-circle-o" /><span>推荐</span></span>}>
              <Menu.Item key="1" style={{ background: 'white' }}><Link to="/"><span style={{ color: 'black' }}>发现音乐</span></Link></Menu.Item>
              <Menu.Item key="2" style={{ background: 'white' }}><Link to="/list"><span style={{ color: 'black' }}>私人FM</span></Link></Menu.Item>
              <Menu.Item key="3" style={{ background: 'white' }}><span style={{ color: 'black' }}>MV</span></Menu.Item>
            </SubMenu>
            {/* <hr /> */}
            <SubMenu key="sub2" title={<span><Icon type="edit" /><span>我的音乐</span></span>}>
              <Menu.Item key="4" style={{ background: 'white' }}><Link to="/list"><span style={{ color: 'black' }}>本地音乐</span></Link></Menu.Item>
              <Menu.Item key="5" style={{ background: 'white' }}><Link to="/download"><span style={{ color: 'black' }}>下载管理</span></Link></Menu.Item>
              <Menu.Item key="6" style={{ background: 'white' }}><Link to="/musicians"><span style={{ color: 'black' }}>我的歌手</span></Link></Menu.Item>
              <Menu.Item key="6" style={{ background: 'white' }}><span style={{ color: 'black' }}>我的电台</span></Menu.Item>
            </SubMenu>
            {/* <hr /> */}
            <SubMenu key="sub3" title={<span><Icon type="exception" /><span>创建的歌单</span></span>}>
              <Menu.Item key="7" style={{ background: 'white' }}><Link to="/list"><span style={{ color: 'black' }}>我喜欢的音乐</span></Link></Menu.Item>
              <Menu.Item key="8" style={{ background: 'white' }}><span style={{ color: 'black' }}>标准列表</span></Menu.Item>
            </SubMenu>
            {/* <hr /> */}
            <SubMenu key="sub4" title={<span><Icon type="layout" /><span>我的收藏</span></span>}>
              <Menu.Item key="13" style={{ background: 'white' }}><span style={{ color: 'black' }}>图1</span></Menu.Item>
              <Menu.Item key="14" style={{ background: 'white' }}><span style={{ color: 'black' }}>图2</span></Menu.Item>
            </SubMenu>
            {/* <hr /> */}
          </Menu>
        </Sider>
      </Layout>
    );
    return (
      <div>
        {layout}
      </div>
    );
  }
}

export default Siders;
