import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reduxDevtools from './reduxDevtools';

const middlewares = [
  thunk,
];

const composedMiddleware = reduxDevtools(
  applyMiddleware(...middlewares),
);

export default composedMiddleware;