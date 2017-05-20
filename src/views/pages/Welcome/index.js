import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './styles.css';

import Counter from '../../../components/Counter';
import { counterOperations } from '../../../state/ducks/counter';

class Welcome extends Component {
  componentDidMount() {
    console.log('Welcome page mounted.');
  }

  render() {
    return (
      <div>
        <div className="Welcome-header">
          <img src={logo} className="Welcome-logo" alt="logo" />
          <h2>Welcome to React + Redux + Ducks</h2>
        </div>
        <div className="Welcome-intro">
          <Counter
            {...this.props.counter}
            increment={this.props.incrementCounter}
            decrement={this.props.decrementCounter}
          />
        </div>
        <br/>
        <Link to="/repos">Popular React Repos in Github</Link>
      </div>
    );
  }
}

const matchStateToProps = (state) => ({
  counter: state.counter,
});

const matchDispatchToProps = {
  incrementCounter: counterOperations.incrementCounter,
  decrementCounter: counterOperations.decrementCounter,
};

export default connect(matchStateToProps, matchDispatchToProps)(Welcome);
