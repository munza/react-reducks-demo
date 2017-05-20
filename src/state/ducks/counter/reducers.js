import { handleActions } from 'redux-actions';

import types from './types';

const initialState = {
  count: 0,
};

const counterReducer = handleActions({

  [types.INCREMENT_COUNTER]: (state, action) => ({
    ...state,
    count: state.count + 1,
  }),

  [types.DECREMENT_COUNTER]: (state, action) => ({
    ...state,
    count: state.count > 0 ? state.count - 1 : 0,
  }),

}, initialState);

export default counterReducer;