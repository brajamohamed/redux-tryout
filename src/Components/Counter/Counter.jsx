import React from "react";
import "./Counter.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <h3>Count:{count}</h3>
      <div className="button-container">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
