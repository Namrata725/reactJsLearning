import PropsEffectHandler from "./PropsEffectHandler";
import { useEffect, useState } from "react";

function PropsEffectDemo() {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleData = () => {
    setdata(data + 1);
    console.log("data=", data);
  };

  return (
    <div>
      <h4>PropsEffectDemo</h4>

      <h4>{("Count :: ", count)}</h4>
      <button onClick={handleCount}>Count</button>

      <h4>{("data :: ", data)}</h4>
      <button onClick={handleData}>Data </button>

      <PropsEffectHandler count={count} data={data} />
    </div>
  );
}

export default PropsEffectDemo;
