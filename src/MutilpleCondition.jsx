import { useState } from "react";

function MutipleCondition() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>mutiple condition state</h3>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}> Counter</button>
      {count == 0 ? (
        <h3>count is zero</h3>
      ) : count == 1 ? (
        <h3>count is one</h3>
      ) : count == 2 ? (
        <h3>count is two</h3>
      ) : count == 3 ? (
        <h3>count is three</h3>
      ) : count == 4 ? (
        <h3>count is four</h3>
      ) : count == 5 ? (
        <h3>count is five</h3>
      ) : (
        <h3>count is greater than five</h3>
      )}
    </div>
  );
}

export default MutipleCondition;
