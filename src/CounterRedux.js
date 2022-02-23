import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";

function CounterRedux() {
  const countState = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{countState}</div>
      <div className="App">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(2));
          }}
        >
          IncrementBy2
        </button>
      </div>
    </div>
  );
}

export default CounterRedux;
