import React from 'react';

import './styles.css';

const Counter = (props) => (
  <div>
    <button className="Counter-button" onClick={props.decrement}>-</button>
    <span className="Counter-count">{props.count}</span>
    <button className="Counter-button" onClick={props.increment}>+</button>
  </div>
);

export default Counter;