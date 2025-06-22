import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
function UserEdit() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const url = "http://localhost:3000/users/" + id;
  const navigate = useNavigate();
  useEffect(() => {
    getUserData(id);
  }, []);

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  };

  const updateUserData = async () => {
    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        name,
        age,
        email,
      }),
    });
    response = await response.json();
    console.log(response);
    if (response) {
      alert("data updated successfully");
      navigate("/");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>edit data</h3>
      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />
      <button onClick={updateUserData}>update</button>
    </div>
  );
}

export default UserEdit;
