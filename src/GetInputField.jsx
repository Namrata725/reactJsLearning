import { useState } from "react";

function GetInputField() {
  const [name, setName] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const handleClear = () => {
    setName("");
  };
  return (
    <div>
      <h1>user</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={changeName}
        value={name}
      />

      <h4>{name}</h4>
      <button onClick={handleClear}>Clear all</button>
    </div>
  );
}

export default GetInputField;
