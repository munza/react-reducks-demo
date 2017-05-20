import { Welcome, RepoGrid, NotFound } from '../views/pages';
import React from 'react';

const routes = [
  {
    path: "/",
    component: Welcome,
    exact: true,
  },
  {
    path: "/repos",
    component: RepoGrid,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;