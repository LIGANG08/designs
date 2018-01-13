/**
 * ligang
 */

import React from 'react';
import { Layout, Icon, Card, Divider } from 'antd';

const hot = [
  {
    src: 'http://p1.music.126.net/2yC2LSps62FSt5TtOTE04A==/18512477278946515.jpg?param=140y140',
    srcs: 'http://p4.music.126.net/sYVoa6FSng_-gEll-Mn_Zw==/109951163104331744.jpg?param=200y200',
    pic: 'http://p4.music.126.net/6QbE9r2JeqBz3j3Kva--4A==/109951163038217098.jpg?param=200y200',
    pics: 'http://p1.music.126.net/MN2awBqf6dwKPkWd48p8nA==/109951163081971963.jpg?param=140y140',
    number: 88,
    numbers: 160,
    hnumber: 350,
    hnumbers: 70,
    hsrc: 'http://www.iconpng.com/png/miui-bluedescent/musicpicker.png',
    title: '我们的青春,永不言弃 --- 周 杰 伦 ♬',
    titles: '丝绒质感声音集-仿佛晚安前轻吻你的脸颊',
    htitle: '古风伤恋｜待到红颜消 杳杳无归期',
    htitles: '『古风』和声即情感，舍此无他',
  },
  {
    src: 'http://p1.music.126.net/_vatT8yIOIRk9JddrKt7uQ==/109951163046086754.jpg?param=140y140',
    srcs: 'http://p1.music.126.net/vuRXmBPSWNU6yiG9FXQAUQ==/19095218440001908.jpg?param=140y140',
    pic: 'http://p1.music.126.net/v15TAIq4-NdJFyWgWtvahw==/18870918067829375.jpg?param=140y140',
    pics: 'http://p1.music.126.net/8hhDe24F1VcijYAHqRlcYg==/109951163097276826.jpg?param=140y140',
    number: 50,
    numbers: 190,
    hnumber: 370,
    hnumbers: 270,
    hsrc: 'http://www.iconpng.com/png/miui-bluedescent/musicpicker.png',
    title: '爱透了一个人，到底是一种什么体验',
    titles: 'PUBG绝地求生大逃杀素质广场炸街歌单',
    htitle: '你是我生命中一道光，我只愿追随着你',
    htitles: '【致过去 】关于我和你的故事 到此为止',
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
    htype: '华语',
  }, {
    htype: '流行',
  }, {
    htype: '民谣',
  }, {
    htype: '摇滚',
  }];

const ptype = [
  {
    ptype: '华语',
  }, {
    ptype: '流行',
  }, {
    ptype: '民谣',
  }, {
    ptype: '摇滚',
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
            {htype.map((h) => {
              return (
                <div>
                  <div style={{ marginLeft: '10px', color: '#666', fontSize: '15px', padding: '5px' }}>{h.htype}<Divider type="vertical" /></div>
                </div>
              );
            })}
          </div>
          <div style={{ position: 'absolute', top: '25px', right: '30px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></div>
          <Card title="Hot recommendation" style={{ borderBottom: '1px solid red', fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600', marginTop: '70px' }}>
            {hot.map((h) => {
              return (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={h.src} alt="" style={{ width: '150px', height: '150px' }} />
                      <div style={style}>
                        <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: {h.number} 万</span>
                        <img src={h.hsrc} alt="this is pic" style={cstyle} />
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>{h.title}</div>
                    </div>
                  </Card.Grid>
                  <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={h.srcs} alt="" style={{ width: '150px', height: '150px' }} />
                      <div style={style}>
                        <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: {h.numbers} 万</span>
                        <img src={h.hsrc} alt="this is pic" style={cstyle} />
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>{h.titles}</div>
                    </div>
                  </Card.Grid>
                  <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={h.pic} alt="" style={{ width: '150px', height: '150px' }} />
                      <div style={style}>
                        <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: {h.hnumber} 万</span>
                        <img src={h.hsrc} alt="this is pic" style={cstyle} />
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>{h.htitle}</div>
                    </div>
                  </Card.Grid>
                  <Card.Grid style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={h.pics} alt="" style={{ width: '150px', height: '150px' }} />
                      <div style={style}>
                        <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: {h.hnumbers} 万</span>
                        <img src={h.hsrc} alt="this is pic" style={cstyle} />
                      </div>
                      <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>{h.htitles}</div>
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
            {ptype.map((p) => {
              return (
                <div>
                  <div style={{ marginLeft: '10px', color: '#666', fontSize: '15px', padding: '5px' }}>{p.ptype}<Divider type="vertical" /></div>
                </div>
              );
            })}
          </div>
          <div style={{ position: 'absolute', top: '25px', right: '30px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></div>
          <Card title="Personalized recommendation" style={{ borderBottom: '1px solid red', fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600', marginTop: '70px' }}>
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
