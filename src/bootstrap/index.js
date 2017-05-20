import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from '../state/store';
import App from '../views/layouts/App';
import routes from '../routes';
import { MapRoutes } from '../utils';

const history = createBrowserHistory();

const RootHtml = (props) => (
  <ReduxProvider store={store}>
    <Router history={history}>
      <App>
        <MapRoutes routes={routes}/>
      </App>
    </Router>
  </ReduxProvider>
);

export { default as registerServiceWorker } from './registerServiceWorker';

export default RootHtml;