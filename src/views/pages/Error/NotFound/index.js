import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="Error-header">
          <h1>404 Not Found</h1>
        </div>
        <div className="Error-intro">
          URL path <strong><code>{this.props.location.pathname}</code></strong> does not exists!
        </div>
        <br/>
        <Link to="/">Go to Homepage</Link>
      </div>
    );
  }
}

export default NotFound;
