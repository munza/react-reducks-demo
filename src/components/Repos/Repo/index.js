import React from 'react';

import './style.css';

const Repo = (props) => (
  <li className="Repo-item" key={props.repo.id}>
    <a className="Repo-name" href={props.repo.html_url}>
      {props.repo.name}
    </a>
    <span className="Repo-star">
      Stars: {props.repo.stargazers_count}
    </span>
  </li>
);

export default Repo;