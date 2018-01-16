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
      url: 'http://music.163.com/song/media/outer/url?id=483671599.mp3',
    }, {
      key: '2',
      play: require('../image/play.png'),
      src: 'http://i01.pic.sogou.com/358447d676d3a67c',
      song: '李白',
      time: '04:12',
      autor: '李荣浩',
      albums: '《李白》',
      url: 'http://music.163.com/song/media/outer/url?id=26662115.mp3',
    }, {
      key: '3',
      play: require('../image/play.png'),
      src: 'http://i04.pic.sogou.com/a2e555b84cdbdbaa',
      song: '80000(Prod.By DROYC)',
      time: '01:48',
      autor: 'PRC 巴音汗',
      albums: '《80000(Prod.By DROYC)》',
      url: 'http://music.163.com/song/media/outer/url?id=476592630.mp3',
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
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({
        type: 'list',
        // payload: true,
      });
    },
  },

  reducers: {
    list(state) {
      return {
        ...state,
        datas: {
          ...state.datas,
        },
      };
    },
  },
};
