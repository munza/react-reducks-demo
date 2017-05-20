import { composeWithDevTools } from 'redux-devtools-extension';

const devToolsInitializer = process.env.NODE_ENV !== 'production'
  ? composeWithDevTools
  : middlewares => middlewares;

export default devToolsInitializer;