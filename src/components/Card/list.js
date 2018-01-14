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

class Lists extends React.Component {

  render() {
    const layout = (
      <Layout>
        <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C', boxShadow: '5px 5px 10px silver' }}>
          <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />榜单推荐
          <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
        </div>
        <Card title="The new disc recommended" style={{ borderBottom: '1px solid red', fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600' }}>
          <Card.Grid style={gridStyle}>
            <img
              src="http://p1.music.126.net/_vatT8yIOIRk9JddrKt7uQ==/109951163046086754.jpg?param=140y140" alt="this is pic"
              style={{ width: '150px', height: '150px', boxShadow: '8px 8px 5px silver' }}
            />
            <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black', marginTop: '20px' }}>爱透了一个人，到底是一种什么体验</div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              src="http://p1.music.126.net/H7EVdxwisIdwHiiZgAa3Wg==/18503681185978736.jpg?param=140y140" alt="this is pic"
              style={{ width: '150px', height: '150px', boxShadow: '8px 8px 5px silver' }}
            />
            <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black', marginTop: '20px' }}>再深的感情也抵挡不住缘分的交错</div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              src="http://p1.music.126.net/v15TAIq4-NdJFyWgWtvahw==/18870918067829375.jpg?param=140y140" alt="this is pic"
              style={{ width: '150px', height: '150px', boxShadow: '8px 8px 5px silver' }}
            />
            <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black', marginTop: '20px' }}>你是我生命中一道光，我只愿追随着你</div>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <img
              src="http://p1.music.126.net/8hhDe24F1VcijYAHqRlcYg==/109951163097276826.jpg?param=140y140" alt="this is pic"
              style={{ width: '150px', height: '150px', boxShadow: '8px 8px 5px silver' }}
            />
            <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black', marginTop: '20px' }}>【致过去 】关于我和你的故事 到此为止</div>
          </Card.Grid>
        </Card>
      </Layout>
    );
    return (
      <div>
        {layout}
      </div>
    );
  }
}

export default Lists;
