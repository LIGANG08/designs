/**
 * ligang
 */

import React from 'react';
import { Layout, Icon, Card, Divider, Table } from 'antd';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import styles from '../List/list.less';

// const { Content } = Layout;
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

const gridStyle = {
  width: '25%',
  textAlign: 'center',
  display: 'inline-block',
  Flexdirection: 'column',
  Alignitems: 'center',
  Justifycontent: 'center',
};

const columns = [{
  dataIndex: 'key',
}, {
  title: '播放',
  dataIndex: 'play',
  render: (text) => {
    return <img src={text} alt={'g'} width={'30px'} height={'30px'} />;
  },
}, {
  title: 'image',
  dataIndex: 'src',
  render: text => <img src={text} alt={'g'} width={'60px'} height={'60px'} />,
}, {
  title: '歌曲标题',
  dataIndex: 'song',
  render: text => <a href="/#">{text}</a>,
}, {
  title: '时长',
  dataIndex: 'time',
}, {
  title: '歌手',
  dataIndex: 'autor',
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

class Contents extends React.Component {
  render() {
    const layout = (
      <Layout>
        <Content className={styles.content}>
          <div className={styles.wrap}>
            <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C', boxShadow: '5px 5px 10px silver' }}>
              <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />热门推荐
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
              <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
            </div>
            <Card title="Hot recommendation" style={{ borderBottom: '1px solid red', fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600' }}>
              <Card.Grid style={gridStyle}>
                <img
                  src="http://p4.music.126.net/PVGZZELy2BX0jM__-i5dkw==/19007257509865737.jpg?param=200y200" alt="this is pic"
                  style={{ width: '150px', height: '150px' }}
                />
                <div
                  style={{
                    width: '150px',
                    height: '30px',
                    position: 'relative',
                    top: '-30px',
                    left: '18px',
                    opacity: '0.6',
                    background: 'black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '3px 0 5px 5px',
                  }}
                >
                  <span style={{ color: 'wheat', lineHeight: '30px' }}>浏览: 130 万</span>
                  <img
                    src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                    style={{ width: '45px', height: '45px', position: 'relative', top: '-10px' }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>闭上眼,带你穿越回2004年</div>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <img
                  src="http://img.ivsky.com/img/tupian/t/201103/18/qinjin_daziran-006.jpg" alt="this is pic"
                  style={{ width: '150px', height: '150px' }}
                />
                <div
                  style={{
                    width: '150px',
                    height: '30px',
                    position: 'relative',
                    top: '-30px',
                    left: '18px',
                    opacity: '0.6',
                    background: 'black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '3px 0 5px 5px' }}
                >
                  <span style={{ color: 'wheat', position: 'absolute', top: '6px' }}>浏览: 70 万</span>
                  <img
                    src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                    style={{ width: '50px', height: '50px', marginTop: '-10px', marginLeft: '90px' }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>倾听自然 . 雨声轻弹</div>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <img
                  src="http://p1.music.126.net/jDicOuPLwo2pEAvj3tLPOQ==/19224960812054294.jpg?param=140y140" alt="this is pic"
                  style={{ width: '150px', height: '150px' }}
                />
                <div
                  style={{
                    width: '150px',
                    height: '30px',
                    position: 'relative',
                    top: '-30px',
                    left: '18px',
                    opacity: '0.6',
                    background: 'black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '3px 0 5px 5px' }}
                >
                  <span style={{ color: 'wheat', position: 'absolute', top: '6px' }}>浏览: 90 万</span>
                  <img
                    src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                    style={{ width: '50px', height: '50px', marginLeft: '90px', marginTop: '-10px' }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>Fade (Remix)</div>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <img
                  src="http://p4.music.126.net/sg9zGM77YWeSXpKpH98h_A==/2528876744145400.jpg?param=200y200" alt="this is pic"
                  style={{ width: '150px', height: '150px' }}
                />
                <div
                  style={{
                    width: '150px',
                    height: '30px',
                    position: 'relative',
                    top: '-30px',
                    left: '18px',
                    opacity: '0.6',
                    background: 'black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '3px 0 5px 5px' }}
                >
                  <span style={{ color: 'wheat', position: 'absolute', top: '6px' }}>浏览: 330 万</span>
                  <img
                    src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                    style={{ width: '50px', height: '50px', marginLeft: '90px', marginTop: '-10px' }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>史诗级配乐,听了想去战斗！</div>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <img
                  src="http://p4.music.126.net/eXhh2CjjqEn9KjKs8Qek1A==/18909400974912277.jpg?param=200y200" alt="this is pic"
                  style={{ width: '150px', height: '150px' }}
                />
                <div
                  style={{
                    width: '150px',
                    height: '30px',
                    position: 'relative',
                    top: '-30px',
                    left: '18px',
                    opacity: '0.6',
                    background: 'black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '3px 0 5px 5px' }}
                >
                  <span style={{ color: 'wheat', position: 'absolute', top: '6px' }}>浏览: 530 万</span>
                  <img
                    src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                    style={{ width: '50px', height: '50px', marginLeft: '90px', marginTop: '-10px' }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>「纯音乐｜节奏控」一杯提神的薄荷茶。</div>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <img
                  src="http://p3.music.126.net/QeejsDZArWrU9rDqMUIhnA==/18619129906901250.jpg?param=200y200" alt="this is pic"
                  style={{ width: '150px', height: '150px' }}
                />
                <div
                  style={{
                    width: '150px',
                    height: '30px',
                    position: 'relative',
                    top: '-30px',
                    left: '18px',
                    opacity: '0.6',
                    background: 'black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '3px 0 5px 5px' }}
                >
                  <span style={{ color: 'wheat', position: 'absolute', top: '6px' }}>浏览: 30 万</span>
                  <img
                    src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                    style={{ width: '50px', height: '50px', marginLeft: '90px', marginTop: '-10px' }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>布鲁斯吉他·弹动你的神经,触动你的情怀</div>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <img
                  src="http://p4.music.126.net/6QbE9r2JeqBz3j3Kva--4A==/109951163038217098.jpg?param=200y200" alt="this is pic"
                  style={{ width: '150px', height: '150px' }}
                />
                <div
                  style={{
                    width: '150px',
                    height: '30px',
                    position: 'relative',
                    top: '-30px',
                    left: '18px',
                    opacity: '0.6',
                    background: 'black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '3px 0 5px 5px' }}
                >
                  <span style={{ color: 'wheat', position: 'absolute', top: '6px' }}>浏览: 585 万</span>
                  <img
                    src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                    style={{ width: '50px', height: '50px', marginLeft: '90px', marginTop: '-10px' }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>古风·殇恋｜待到红颜消 杳杳无归期</div>
              </Card.Grid>
            </Card>
            <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C', boxShadow: '5px 5px 10px silver' }}>
              <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />个性化推荐
              <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
            </div>
            <Card title="Personalized recommendation" style={{ fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600' }}>
              <Card.Grid style={gridStyle}>
                <img
                  src="http://p1.music.126.net/d-8mqXQeaFrzVnhIpJZ_bw==/109951163024862695.jpg?param=140y140" alt="this is pic"
                  style={{ width: '150px', height: '150px' }}
                />
                <div
                  style={{
                    width: '150px',
                    height: '30px',
                    position: 'relative',
                    top: '-30px',
                    left: '18px',
                    opacity: '0.6',
                    background: 'black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '3px 0 5px 5px' }}
                >
                  <span style={{ color: 'wheat', position: 'absolute', top: '6px' }}>浏览: 730 万</span>
                  <img
                    src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                    style={{ width: '50px', height: '50px', marginLeft: '90px', marginTop: '-10px' }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>每日歌曲推荐</div>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <img
                  src="http://p4.music.126.net/_n1pXxJUowBgAOGGqy2drg==/18914898533114628.jpg?param=200y200" alt="this is pic"
                  style={{ width: '150px', height: '150px' }}
                />
                <div
                  style={{
                    width: '150px',
                    height: '30px',
                    position: 'relative',
                    top: '-30px',
                    left: '18px',
                    opacity: '0.6',
                    background: 'black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '3px 0 5px 5px' }}
                >
                  <span style={{ color: 'wheat', position: 'absolute', top: '6px' }}>浏览: 30 万</span>
                  <img
                    src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                    style={{ width: '50px', height: '50px', marginLeft: '90px', marginTop: '-10px' }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>小语种（法、德、俄语等）</div>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <img
                  src="http://p3.music.126.net/g81kgQtljm16W6Co4tyivw==/6659741930176932.jpg?param=200y200" alt="this is pic"
                  style={{ width: '150px', height: '150px' }}
                />
                <div
                  style={{
                    width: '150px',
                    height: '30px',
                    position: 'relative',
                    top: '-30px',
                    left: '18px',
                    opacity: '0.6',
                    background: 'black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '3px 0 5px 5px' }}
                >
                  <span style={{ color: 'wheat', position: 'absolute', top: '6px' }}>浏览: 830 万</span>
                  <img
                    src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                    style={{ width: '50px', height: '50px', marginLeft: '90px', marginTop: '-10px' }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>气势磅礴的背景音乐</div>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <img
                  src="http://p4.music.126.net/jJH4QgOgcYKKR71ncKHcYA==/3246857838870610.jpg?param=200y200" alt="this is pic"
                  style={{ width: '150px', height: '150px' }}
                />
                <div
                  style={{
                    width: '150px',
                    height: '30px',
                    position: 'relative',
                    top: '-30px',
                    left: '18px',
                    opacity: '0.6',
                    background: 'black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '3px 0 5px 5px' }}
                >
                  <span style={{ color: 'wheat', position: 'absolute', top: '6px' }}>浏览: 930 万</span>
                  <img
                    src="http://www.iconpng.com/png/miui-bluedescent/musicpicker.png" alt="this is pic"
                    style={{ width: '50px', height: '50px', marginLeft: '90px', marginTop: '-10px' }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontStyle: 'normal', color: 'black' }}>震撼纯音&史诗级神BGM</div>
              </Card.Grid>
            </Card>
            <div style={{ fontSize: '20px', margin: '10px', paddingBottom: '5px', color: '#333', borderBottom: '2px solid #C10D0C', boxShadow: '5px 5px 10px silver' }}>
              <Icon type="edit" style={{ margin: '10px', color: '#C10D0C' }} />新碟推荐
              <a href="/#" style={{ float: 'right', lineHeight: '40px', color: '#333', fontSize: '15px' }}>更多<Icon type="arrow-right" style={{ color: '#C10D0C', marginLeft: '5px' }} /></a>
            </div>
            <Card title="The new disc recommended" style={{ fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600' }}>
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
            <Card title="List of recommended" style={{ fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '600' }}>
              <Card.Grid style={gridStyle}>
                <img src="http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg" alt="this is pic" style={{ width: '150px', height: '150px' }} />
              </Card.Grid>
              <Card.Grid style={gridStyle}><img src="http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg" alt="this is pic" style={{ width: '150px', height: '150px' }} /></Card.Grid>
              <Card.Grid style={gridStyle}><img src="http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg" alt="this is pic" style={{ width: '150px', height: '150px' }} /></Card.Grid>
              <Card.Grid style={gridStyle}><img src="http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg" alt="this is pic" style={{ width: '150px', height: '150px' }} /></Card.Grid>
            </Card>
            <Table
              style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '1000px' }}
              pagination={{ pageSize: 6 }}
              columns={columns}
              dataSource={datas}
              bordered
              footer={() => 'Footer'}
            />
          </div>
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

export default Contents;
