import { useState } from "react";
function UserAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async () => {
    if (!name || !age || !email) {
      alert("Please fill in all fields.");
      return;
    }
    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        name,
        age,
        email,
      }),
    });
    response = await response.json();
    if (response) {
      alert("User Created Successfully");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add User</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter email"
        onChange={(event) => setAge(event.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="Enter age"
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <br />
      <button onClick={createUser}>add User</button>
    </div>
  );
}

export default UserAdd;
