/**
 * ligang
 */

import React from 'react';
import { Layout, Icon, Card, Divider } from 'antd';

const hot = [
  {
    src: 'http://p4.music.126.net/PVGZZELy2BX0jM__-i5dkw==/19007257509865737.jpg?param=200y200',
    srcs: 'http://p4.music.126.net/sYVoa6FSng_-gEll-Mn_Zw==/109951163104331744.jpg?param=200y200',
    pic: 'http://p4.music.126.net/6QbE9r2JeqBz3j3Kva--4A==/109951163038217098.jpg?param=200y200',
    pics: 'http://p1.music.126.net/MN2awBqf6dwKPkWd48p8nA==/109951163081971963.jpg?param=140y140',
  },
  {
    src: 'http://img.ivsky.com/img/tupian/t/201103/18/qinjin_daziran-006.jpg',
    srcs: 'http://p3.music.126.net/-Sw4EZ2CHj5QMvQTmP5mjw==/109951163099346002.jpg?param=177y177',
    pic: 'http://p4.music.126.net/eXhh2CjjqEn9KjKs8Qek1A==/18909400974912277.jpg?param=200y200',
    pics: 'http://p1.music.126.net/yUxsEGkA9_nSPgr6P7GzKg==/18645518185873305.jpg?param=140y140',
  }];

const person = [
  {
    src: 'http://p1.music.126.net/fs9-bg5-reljcOOlPqe6Gg==/109951163094225761.jpg?param=140y140',
    srcs: 'http://p1.music.126.net/0JIkWClR6VtJ5JKwEWB9HA==/18516875325525359.jpg?param=140y140',
    pic: 'http://p1.music.126.net/DEZWLLr7rr1WmuYtLJAnFw==/109951163064698079.jpg?param=140y140',
    pics: 'http://p1.music.126.net/Y6kpbxQ6C-MJqjCUnC3xdA==/109951163071182230.jpg?param=140y140',
    number: 88,
    numbers: 160,
    pnumber: 350,
    pnumbers: 70,
    psrc: 'http://www.iconpng.com/png/miui-bluedescent/musicpicker.png',
    title: 'J·Pop丨冷门佳曲赏',
    titles: '⚡️17年12月新热电音推送',
    ptitle: '「独立女嗓 一场浮生若梦',
    ptitles: '日式少年音，温柔少年心',
  },
  {
    src: 'http://p1.music.126.net/h1VB-TbIApSkB9GavOxEfA==/109951163096063666.jpg?param=140y140',
    srcs: 'http://p1.music.126.net/H7EVdxwisIdwHiiZgAa3Wg==/18503681185978736.jpg?param=140y140',
    pic: 'http://p1.music.126.net/BtInXBZvnMN13B-ER2oVHg==/19053436998081875.jpg?param=140y140',
    pics: 'http://p1.music.126.net/kZb9DO4vykqiYEx0HHx86w==/109951163065542645.jpg?param=140y140',
    number: 50,
    numbers: 190,
    pnumber: 370,
    pnumbers: 270,
    psrc: 'http://www.iconpng.com/png/miui-bluedescent/musicpicker.png',
    title: '【日音】2017年不容错过的100首日系良曲',
    titles: '再深的感情也抵挡不住缘分的交错',
    ptitle: '倒叙年华‖时光漫步之1987～1996',
    ptitles: '华语 | 假如能回到过去，你想做什么',
  }];

const htype = [
  {
    type: '华语',
  }, {
    type: '流行',
  }, {
    type: '民谣',
  }, {
    type: '摇滚',
  }];

const ptype = [
  {
    type: '华语',
  }, {
    type: '流行',
  }, {
    type: '民谣',
  }, {
    type: '摇滚',
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

const cstyle = {
  width: '45px',
  height: '45px',
  position: 'relative',
  top: '-10px',
};

class MapCard extends React.Component {

  render() {
    const layout = (
      <Layout>
        <div style={{ position: 'relative', display: 'flex', alignItems: '', flexDirection: 'column', boxShadow: '5px 5px 10px silver', padding: '0 0px' }} >
        <div style={{ width: '98%', height: '50px', position: 'absolute', left: '10px', top: '10px', display: 'flex', alignItems: 'center', justifyContent: '', boxShadow: '5px 5px 10px silver', fontSize: '20px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
          <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />热门推荐
          {htype.map((t) => {
            return (
              <div>
                <div style={{ marginLeft: '10px', color: '#666', fontSize: '15px', padding: '5px' }}>{t.type}<Divider type="vertical" /></div>
              </div>
            );
          })}
        </div>
        <div style={{ position: 'absolute', top: '25px', right: '30px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></div>
        <Card title="title" style={{ border: '1px solid blue', borderBottom: '1px solid red', fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600', marginTop: '70px' }}>
          {hot.map((h) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={h.src} alt="" style={{ width: '150px', height: '150px' }} />
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
                    <img src={h.srcs} alt="" style={{ width: '150px', height: '150px' }} />
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
                    <img src={h.pic} alt="" style={{ width: '150px', height: '150px' }} />
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
                    <img src={h.pics} alt="" style={{ width: '150px', height: '150px' }} />
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
      <div style={{ position: 'relative', display: 'flex', alignItems: '', flexDirection: 'column', boxShadow: '5px 5px 10px silver', padding: '0 0px' }} >
        <div style={{ width: '98%', height: '50px', position: 'absolute', left: '10px', top: '10px', display: 'flex', alignItems: 'center', justifyContent: '', boxShadow: '5px 5px 10px silver', fontSize: '20px', color: '#333', borderBottom: '2px solid #C10D0C' }}>
          <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />个性推荐
          {ptype.map((t) => {
            return (
              <div>
                <div style={{ marginLeft: '10px', color: '#666', fontSize: '15px', padding: '5px' }}>{t.type}<Divider type="vertical" /></div>
              </div>
            );
          })}
        </div>
        <div style={{ position: 'absolute', top: '25px', right: '30px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></div>
        <Card title="title" style={{ border: '1px solid blue', borderBottom: '1px solid red', fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600', marginTop: '70px' }}>
          {person.map((p) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={p.src} alt="" style={{ width: '150px', height: '150px' }} />
                    <div style={style}>
                      <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: {p.number} 万</span>
                      <img src={p.psrc} alt="this is pic" style={cstyle} />
                    </div>
                    <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>{p.title}</div>
                  </div>
                </Card.Grid>
                <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={p.srcs} alt="" style={{ width: '150px', height: '150px' }} />
                    <div style={style}>
                      <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: {p.numbers} 万</span>
                      <img src={p.psrc} alt="this is pic" style={cstyle} />
                    </div>
                    <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>{p.titles}</div>
                  </div>
                </Card.Grid>
                <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={p.pic} alt="" style={{ width: '150px', height: '150px' }} />
                    <div style={style}>
                      <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: {p.pnumber} 万</span>
                      <img src={p.psrc} alt="this is pic" style={cstyle} />
                    </div>
                    <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>{p.ptitle}</div>
                  </div>
                </Card.Grid>
                <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={p.pics} alt="" style={{ width: '150px', height: '150px' }} />
                    <div style={style}>
                      <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: {p.pnumbers} 万</span>
                      <img src={p.psrc} alt="this is pic" style={cstyle} />
                    </div>
                    <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>{p.ptitles}</div>
                  </div>
                </Card.Grid>
              </div>
            );
          })}
        </Card>
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

export default MapCard;
