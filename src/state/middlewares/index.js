import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reduxDevtools from './reduxDevtools';
import routerMiddleware from './routerMiddleware';

const middlewares = [
  routerMiddleware,
  thunk,
];

const composedMiddleware = reduxDevtools(
  applyMiddleware(...middlewares),
);

export default composedMiddleware;
