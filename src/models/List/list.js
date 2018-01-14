export default {
  namespace: 'list',
  state: {
    datas: [
      {
        id: 1,
        title: '薛之谦',
        song: '丑八怪',
        src: 'http://huyaimg.dwstatic.com/avatar/1056/9a/db274c276ff4d6aecffc0997d8e789_180_135.jpg',
      },
      {
        id: 2,
        title: '李荣浩',
        song: '李白',
        src: 'http://i01.pic.sogou.com/358447d676d3a67c',
      },
      {
        id: 3,
        title: 'PRC 巴音汗',
        song: '80000(Prod.By DROYC)',
        src: 'http://i04.pic.sogou.com/a2e555b84cdbdbaa',
      },
      {
        id: 4,
        title: '音阙诗听',
        song: '红昭愿',
        src: 'http://i02.pic.sogou.com/78ccb0feab55c76c',
      },
    ],
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
        data: {
          ...state.data,
        },
      };
    },
  },
};
