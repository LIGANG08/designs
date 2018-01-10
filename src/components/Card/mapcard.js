/**
 * ligang
 */

import React from 'react';
import { Layout, Card, Divider } from 'antd';

const boxs = [
  {
    type: '华语',
    src: 'http://p4.music.126.net/PVGZZELy2BX0jM__-i5dkw==/19007257509865737.jpg?param=200y200',
    title: 'Hot recommendation',
    name: 'box1',
  },
  {
    type: '流行',
    src: 'http://img.ivsky.com/img/tupian/t/201103/18/qinjin_daziran-006.jpg',
    title: 'Personalized recommendation',
    name: 'box2',
  },
  {
    type: '摇滚',
    src: 'http://p1.music.126.net/jDicOuPLwo2pEAvj3tLPOQ==/19224960812054294.jpg?param=140y140',
    title: 'The new disc recommended',
    name: 'box3',
  },
  {
    type: '民谣',
    src: 'http://p4.music.126.net/sg9zGM77YWeSXpKpH98h_A==/2528876744145400.jpg?param=200y200',
    title: 'List of recommended',
    name: 'box4',
  }];

const style = {
  width: '150px',
  height: '30px',
  position: 'relative',
  top: '-30px',
  left: 'px',
  opacity: '0.4',
  background: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '3px 0 5px 5px',
  border: '1px solid gray',
};

class MapCard extends React.Component {

  render() {
    const layout = (
      <Layout>
        {boxs.map((b) => {
          return (
            <div style={{ position: 'relative', display: 'flex', alignItems: '', flexDirection: 'column', boxShadow: '5px 5px 10px silver', padding: '0 0px' }} >
              <div style={{ width: '98%', height: '50px', position: 'absolute', left: '10px', top: '10px', display: 'flex', alignItems: 'center', justifyContent: '', boxShadow: '5px 5px 10px silver', fontSize: '20px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
                {boxs.map((c) => {
                  return (
                    <div>
                      <div style={{ marginLeft: '10px', color: '#666', fontSize: '15px', padding: '5px' }}>{c.type}<Divider type="vertical" /></div>
                    </div>
                  );
                })}
              </div>
              <div style={{ position: 'absolute', top: '25px', right: '30px' }}>更多</div>
              <Card title={b.title} style={{ border: '1px solid blue', borderBottom: '1px solid red', fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600', marginTop: '70px' }}>
                {boxs.map((c) => {
                  return (
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                          <img src={c.src} alt="" style={{ width: '150px', height: '150px' }} />
                          <div style={style}>
                            <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                            <img
                              src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                              style={{ width: '45px', height: '45px', position: 'relative', top: '-10px' }}
                            />
                          </div>
                          <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>闭上眼,带你穿越回2004年</div>
                        </div>
                      </Card.Grid>
                      <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                          <img src={c.src} alt="" style={{ width: '150px', height: '150px' }} />
                          <div style={style}>
                            <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                            <img
                              src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                              style={{ width: '45px', height: '45px', position: 'relative', top: '-10px' }}
                            />
                          </div>
                          <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>闭上眼,带你穿越回2004年</div>
                        </div>
                      </Card.Grid>
                      <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                          <img src={c.src} alt="" style={{ width: '150px', height: '150px' }} />
                          <div style={style}>
                            <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                            <img
                              src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                              style={{ width: '45px', height: '45px', position: 'relative', top: '-10px' }}
                            />
                          </div>
                          <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>闭上眼,带你穿越回2004年</div>
                        </div>
                      </Card.Grid>
                      <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                          <img src={c.src} alt="" style={{ width: '150px', height: '150px' }} />
                          <div style={style}>
                            <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                            <img
                              src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                              style={{ width: '45px', height: '45px', position: 'relative', top: '-10px' }}
                            />
                          </div>
                          <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>闭上眼,带你穿越回2004年</div>
                        </div>
                      </Card.Grid>
                    </div>
                  );
                })}
              </Card>
            </div>
          );
        })}
      </Layout>
    );
    return (
      <div>
        {layout}
      </div>
    );
  }
}

export default MapCard;
