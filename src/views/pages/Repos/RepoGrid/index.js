import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';

import { RepoGrid } from '../../../../components/Repos';
import { reposOperations } from '../../../../state/ducks/repos';
import store from '../../../../state/store';
import { MapRoutes } from '../../../../utils';

class ReposList extends Component {
  componentDidMount() {
    console.log('Repos page mounted.');
    store.dispatch(reposOperations.getReposData('react'));
  }

  render() {
    let { repos, isLoading, error, message } = this.props.repos;

    return (
      <div>
        <h1>Popular React Repos in Github</h1>
        <Link to="/">Back</Link>

        {isLoading ? (
          <h4>Loading...</h4>
        ): ''}

        {error ? (
          <div className="Repos-error">
            <h4>Error!</h4>
            <p>{message}</p>
          </div>
        ): ''}

        {repos.length ? (
          <RepoGrid repos={repos}/>
        ): ''}

        <MapRoutes routes={this.props.routes}/>
      </div>
    );
  }
}

const matchStateToProps = (state) => ({
  repos: state.repos,
});

const matchDispatchToProps = {};

export default connect(matchStateToProps, matchDispatchToProps)(ReposList);
