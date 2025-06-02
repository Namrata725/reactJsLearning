import { useState } from "react";
function ControlComponent() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClear = () => {
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <h4>Control Component </h4>
      <form action="">
        <input
          type="text"
          onChange={handleName}
          value={name}
          placeholder="enter your name"
        />
        <br /> <br />
        <input
          type="password"
          placeholder="enter your password"
          onChange={handlePassword}
          value={password}
        />
        <br /> <br />
        <input
          type="email"
          placeholder="enter your email"
          onChange={handleEmail}
          value={email}
        />
        <br /> <br />
        <button>Submit</button>
        <button onClick={handleClear}>Clear</button>
        <h4>{name}</h4>
        <h4>{password}</h4>
        <h4>{email}</h4>
      </form>
    </div>
  );
}

export default ControlComponent;
