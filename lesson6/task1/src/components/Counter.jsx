import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../counter.actions';

const Counter = ({ increment, decrement, reset, counter }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

const mapState = state => {
  return {
    counter: state,
  };
};

export default connect(mapState, mapDispatch)(Counter);
