import { useRef } from "react";

function UseRefDemo() {
  const inputRef = useRef(null);

  const handleInput = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "green";
  };

  const toggleHandle = () => {
    if (inputRef.current.style.display != "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  };

  return (
    <div>
      <h3>UseRef Demo</h3>

      <input ref={inputRef} type="text" placeholder="enter your name" />
      <button onClick={handleInput}>Click for focus</button>
      <button onClick={toggleHandle}>Toggle</button>
    </div>
  );
}

export default UseRefDemo;
