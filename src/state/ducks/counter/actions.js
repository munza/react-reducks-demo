import { createActions } from 'redux-actions';

import types from './types';

const actions = createActions({

  [types.INCREMENT_COUNTER]: () => ({}),

  [types.DECREMENT_COUNTER]: () => ({}),

});

export default actions;