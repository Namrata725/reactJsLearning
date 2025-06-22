import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
function UserEdit() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getUserData(id);
  }, []);

  const getUserData = async () => {
    const url = "http://localhost:3000/users/" + id;
    let response = await fetch(url);
    response = await response.json();
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>edit data</h3>
      <input type="text" placeholder="enter name" value={name} />
      <br />
      <br />
      <input type="text" placeholder="enter age" value={age} />
      <br />
      <br />
      <input type="text" placeholder="enter email" value={email} />
      <br />
      <br />
      <button>update</button>
    </div>
  );
}

export default UserEdit;
