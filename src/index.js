import React from 'react';
import { render } from 'react-dom';
import RootHtml, { registerServiceWorker } from './bootstrap';

render(<RootHtml/>, document.getElementById('root'));
registerServiceWorker();
