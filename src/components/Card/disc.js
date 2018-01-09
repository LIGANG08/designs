/**
 * ligang
 */

import React from 'react';
import { Layout, Icon, Card } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
  display: 'inline-block',
  Flexdirection: 'column',
  Alignitems: 'center',
  Justifycontent: 'center',
};

class Disc extends React.Component {

  render() {
    const layout = (
      <Layout>
        <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C', boxShadow: '5px 5px 10px silver' }}>
          <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />新碟推荐
          <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
        </div>
        <Card title="The new disc recommended" style={{ borderBottom: '1px solid red', fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600' }}>
          <Card.Grid style={gridStyle}>
            <img
              src="http://p4.music.126.net/JgXdIpvSVmV48Lm8DUwR8g==/109951163081363543.jpg?param=177y177" alt="this is pic"
              style={{ width: '150px', height: '150px', boxShadow: '8px 8px 5px silver' }}
            />
            <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black', marginTop: '20px' }}>Merry & Happy</div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              src="http://p4.music.126.net/MqEwyPK1SKmSFuq07BhkDg==/109951163044129482.jpg?param=177y177" alt="this is pic"
              style={{ width: '150px', height: '150px', boxShadow: '8px 8px 5px silver' }}
            />
            <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black', marginTop: '20px' }}>音乐好朋友 第一季</div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              src="http://p4.music.126.net/fNbj5uDwltSDLbETdnEYYQ==/109951163069265719.jpg?param=177y177" alt="this is pic"
              style={{ width: '150px', height: '150px', boxShadow: '8px 8px 5px silver' }}
            />
            <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black', marginTop: '20px' }}>渡(The Crossing)</div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              src="http://p4.music.126.net/mNGUGwmo3RRDWuYWT5cn3w==/18858823439726982.jpg?param=177y177" alt="this is pic"
              style={{ width: '150px', height: '150px', boxShadow: '8px 8px 5px silver' }}
            />
            <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black', marginTop: '20px' }}>One More Light Live</div>
          </Card.Grid>
        </Card>
        <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C', boxShadow: '5px 5px 10px silver' }}>
          <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />榜单推荐
          <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
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

export default Disc;
