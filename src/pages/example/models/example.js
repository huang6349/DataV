import { query } from '../../../services/example';

export default {
  namespace: 'example',
  state: {
    layouts: [],
  },
  subscriptions: {
    setup: function ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/example') {
          dispatch({
            type: 'fetch_layouts',
            payload: {},
          });
        }
      });
    },
  },
  effects: {
    fetch_layouts: function* ({ payload }, { put, call, select }) {
      const response = yield call(query);
      const { data } = response;
      if (data) {
        yield put({
          type: 'update_state',
          payload: {
            layouts: data,
          },
        });
      }
    },
  },
  reducers: {
    update_state: function (state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
};
