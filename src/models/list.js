export default {
  namespace: 'list',
  state: {
    datas: [{
      key: '1',
      play: require('../image/play.png'),
      src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
      song: '丑八怪',
      time: '04:26',
      autor: '薛之谦',
      albums: '《意外》',
      background: 'this.state.background',
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
    }],
    musicsrc: [
      { src: 'http://p1.music.126.net/H61l7jss2zgM-2-8bbNvYg==/109951163103329466.jpg' },
      { src: 'http://p1.music.126.net/MwO2V5iAPlXPMKL29aiIPQ==/109951163102317813.jpg' },
      { src: 'http://p1.music.126.net/G74l8fFdzZ555qNPiN0ozw==/19073228207509877.jpg' },
      { src: 'http://p1.music.126.net/IZWfulWM0y0HVkocQG2MNA==/109951163100504335.jpg' },
      { src: 'http://p1.music.126.net/tSz-w6OCMAxqtWVtphHqVQ==/109951163103245931.jpg' },
      { src: 'http://p1.music.126.net/0jC49uQ2mnPeWptM7sNAgg==/109951163100181204.jpg' },
      { src: 'http://p1.music.126.net/spNFpLdrcZvie1XDfn60Iw==/19208468137739021.jpg' },
      { src: 'http://p1.music.126.net/vvZLXI5EqFLsKLlvfqz0uA==/19088621370291879.jpg' },
      { src: 'http://p1.music.126.net/Gj92V72Sl8u2z6EhLaGF6Q==/19182079858662886.jpg' },
    ],
    loading: false,
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({
        type: 'save',
        payload: true,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
