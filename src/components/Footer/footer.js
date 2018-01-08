/**
 * ligang
 */

import React from 'react';
import { Layout, Icon, Divider, Avatar } from 'antd';

class Footers extends React.Component {
  render() {
    const layout = (
      <Layout>
        <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
          <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />热门推荐
          <Divider type="vertical" />
          <a href="/#" style={{ color: '#666', fontSize: '15px' }}><span>关于网易</span></a>
          <Divider type="vertical" />
          <a href="/#" style={{ color: '#666', fontSize: '15px' }}><span>客户服务</span></a>
          <Divider type="vertical" />
          <a href="/#" style={{ color: '#666', fontSize: '15px' }}><span>服务条款</span></a>
          <Divider type="vertical" />
          <a href="/#" style={{ color: '#666', fontSize: '15px' }}><span>网站导航</span></a>
          <Divider type="vertical" />
          <a href="/#" style={{ color: '#666', fontSize: '15px' }}><span>意见反馈</span></a>
          <Divider type="vertical" />
          <a href="/#" style={{ color: '#666', fontSize: '15px' }}><span>版权所有@ligang</span></a>
          <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
        </div>
        <div>
          <Avatar style={{ marginLeft: '10px', backgroundColor: '#C10D0C' }} />
          <Avatar style={{ marginLeft: '10px', backgroundColor: '#87d068' }} />
          <Avatar style={{ marginLeft: '10px', backgroundColor: '#C10D0C' }} />
          <Avatar style={{ marginLeft: '10px', backgroundColor: '#87d068' }} />
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

export default Footers;
