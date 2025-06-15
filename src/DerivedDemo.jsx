import { useState } from "react";

function DerivedDemo() {
  const [user, setUser] = useState(" ");
  const [users, setUsers] = useState([]);

  const updateUser = (event) => {
    setUser(event.target.value);
  };

  const addUser = () => {
    setUsers([...users, user]);
  };

  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;
  return (
    <div>
      <h4>Derieved State Demo</h4>

      <h4>total user: {total}</h4>
      <h4>Last user: {last}</h4>
      <h4>Unique users: {unique}</h4>
      <input
        type="text"
        placeholder="enter your name"
        onChange={updateUser}
        value={user}
      />

      <button onClick={addUser}>Add new User</button>
      {users.map((item, index) => {
        return <h4 key={index}>{item}</h4>;
      })}
    </div>
  );
}

export default DerivedDemo;
