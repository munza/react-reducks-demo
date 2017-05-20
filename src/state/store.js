import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import initialState from './initialState';
import * as reducers from './ducks';
import middlewares from './middlewares';

function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    ...reducers,
    router: routerReducer,
  });

  return createStore(
    rootReducer,
    initialState,
    middlewares,
  );
}

export const store = configureStore(initialState);

export default store;
