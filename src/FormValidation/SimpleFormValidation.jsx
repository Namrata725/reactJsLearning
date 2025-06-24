import { useState } from "react";
function SimpleFormValidation() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setnameError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
    if (event.target.value.length > 5) {
      setnameError("plase add valid user name. only 5 char allowed");
    } else {
      setnameError("");
    }
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    let regex = /^[A-Z0-9]+$/i;

    if (regex.test(event.target.value)) {
      setpasswordError("");
    } else {
      setpasswordError(
        "plase add valid password. onlynumber and alphabets are allowed"
      );
    }
  };

  return (
    <div>
      <input
        type="text"
        style={nameError ? { outline: "1px solid red" } : {}}
        placeholder="enter name"
        onChange={handleName}
      />{" "}
      <br />
      <span style={{ color: "red" }}>{nameError && nameError}</span>
      <br />
      <br />
      <input
        type="text"
        style={nameError ? { outline: "1px solid red" } : {}}
        placeholder="enter password"
        onChange={handlePassword}
      />{" "}
      <br />
      <span style={{ color: "red" }}>{passwordError && passwordError}</span>
      <br />
      <br />
      <button disabled={nameError || passwordError}>Submit</button>
    </div>
  );
}

export default SimpleFormValidation;
