import { handleActions } from 'redux-actions';

import types from './types';

const initialState = {
  repos: [],
  isLoading: false,
  error: false,
  message: '',
};

const counterReducer = handleActions({

  [types.GET_REPOS]: (state, action) => ({
    ...state,
    repos: [],
    isLoading: true,
    error: false,
  }),

  [types.GET_REPOS_SUCCESS]: (state, action) => ({
    ...state,
    repos: action.payload.repos,
    isLoading: false,
    error: false,
  }),

  [types.GET_REPOS_FAILURE]: (state, action) => ({
    ...state,
    isLoading: false,
    error: true,
    message: action.payload.message,
  }),

}, initialState);

export default counterReducer;