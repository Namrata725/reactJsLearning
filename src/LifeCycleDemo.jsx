import { useState } from "react";
import LifeCycleDemoHandle from "./LifeCycleDemoHandle";

function LifeCycleDemo() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleData = () => {
    setData(data + 1);
  };

  const handleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <h4>Life Cycle Demo</h4>
      <button onClick={handleCount}>Update Count</button>
      <button onClick={handleData}>Update Data</button>
      <button onClick={handleDisplay}>Toggle</button>
      {display ? <LifeCycleDemoHandle count={count} data={data} /> : null}
    </div>
  );
}

export default LifeCycleDemo;
