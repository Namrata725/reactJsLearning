import { useState } from "react";

function UseState() {
  const [fruit, setValue] = useState("apple");
  const btnClick = () => {
    if (fruit === "apple") {
      setValue("banana");
    } else {
      setValue("apple");
    }
  };

  return (
    <div>
      <h3>UseState Example</h3>
      <p>Current fruit: {fruit}</p>
      <button onClick={btnClick}>Change Fruit</button>
    </div>
  );
}

export default UseState;
