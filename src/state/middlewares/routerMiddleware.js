import { routerMiddleware as reduxRouterMiddleware } from 'react-router-redux';

import history from '../store';

const routerMiddleware = reduxRouterMiddleware(history);

export default routerMiddleware;
