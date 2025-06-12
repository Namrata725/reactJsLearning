import { useRef } from "react";
import ForwardRefUser from "./ForwardRefUser";

function ForwardRefDemo() {
  const inputRef = useRef(null);
  const updateInput = () => {
    inputRef.current.value = "Namrata";
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>App</h1>

      <h4>Forward ref</h4>
      <ForwardRefUser ref={inputRef} />
      <button onClick={updateInput}>Update input</button>
    </div>
  );
}

export default ForwardRefDemo;
