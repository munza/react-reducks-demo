import React from 'react';
import { Switch, Route } from 'react-router-dom';

const RenderRoutes = (props) => (
  <Switch>
    {props.routes.map((route, i) => (
      <Route exact={route.exact} key={i} path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
      )}/>
    ))}
  </Switch>
);

const MapRoutes = (props) => (
  <div>
    {props.routes && props.routes.length ? (
      <RenderRoutes {...props}/>
    ): ''}
  </div>
);

export default MapRoutes;