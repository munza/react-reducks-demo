import React from 'react';

import './style.css';

import Repo from '../Repo/index';

const RepoGrid = (props) => (
  <div>
    {props.repos.length ? (
      <ul className="Repo-grid">
        {props.repos.map(repo => (
          <Repo key={repo.id} repo={repo}/>
        ))}
      </ul>
    ): ''}
  </div>
);

export default RepoGrid;