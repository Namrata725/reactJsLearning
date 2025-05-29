import { useState } from "react";

function IFElseif() {
  const [display, setDisplay] = useState(false);
  const [role, setRole] = useState("admin");
  const [name, setName] = useState(""); // store name from prompt
  const [message, setMessage] = useState(null); // display message based on conditions

  const handleClick = () => {
    let userName = prompt("Enter your name");

    if (!isNaN(userName)) {
      alert("Please enter a valid name");
      userName = prompt("Enter your name");
    }

    setName(userName);
    setDisplay(true);

    if (role === "admin") {
      setMessage(<h2>Hello admin {userName}</h2>);
    } else if (role === "user") {
      setMessage(<h2>Hello student {userName}</h2>);
    } else {
      setMessage(<h2>Welcome {userName}, please login</h2>);
    }
  };

  return (
    <div>
      <h2>If else if in react js</h2>
      <button onClick={handleClick}>click me</button>
      {display && message}
    </div>
  );
}

export default IFElseif;
