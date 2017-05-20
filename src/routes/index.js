import { Welcome, RepoGrid, NotFound } from '../views/pages';

const routes = [
  {
    path: "/",
    component: Welcome,
    exact: true,
  },
  {
    path: "/repos",
    component: RepoGrid,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;