import { createActions } from 'redux-actions';

import types from './types';

const actions = createActions({

  [types.GET_REPOS]: (topic) => ({ topic }),

  [types.GET_REPOS_SUCCESS]: (repos) => ({ repos }),

  [types.GET_REPOS_FAILURE]: (error) => ({ error }),

});

export default actions;