import actions from './actions';
import store from '../../store';
import GithubData from '../../../data/github';

export const getRepos = actions.repos.getRepos;
export const getReposSuccess = actions.repos.getReposSuccess;
export const getReposFailure = actions.repos.getReposFailure;

export const getReposData = topic => dispatch => {
  store.dispatch(getRepos(topic));

  GithubData.getReposByTopic(topic)
    .then(response => {
      store.dispatch(getReposSuccess(response.data.items));
    }).catch(error => {
      store.dispatch(getReposFailure(error));
    });
};

export default {
  getRepos,
  getReposSuccess,
  getReposFailure,
  getReposData,
};