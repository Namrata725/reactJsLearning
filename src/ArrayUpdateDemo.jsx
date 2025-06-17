import { useState } from "react";
function ArrayUpdateDemo() {
  return (
    <div>
      <h4>hello</h4>
      {/* <UserList /> */}

      <UserDetailsList />
    </div>
  );
}

// Component 1: UserList (for array of names)
function UserList() {
  const [data, setData] = useState(["John", "Jane", "Doe"]);

  const handleUser = (name) => {
    // Update the last element in the array
    data[data.length - 1] = name;
    setData([...data]);
  };
  return (
    <div>
      <h3>User List</h3>
      <input
        type="text"
        placeholder="enter last user name"
        onChange={(event) => handleUser(event.target.value)}
      />

      {data.map((user, index) => {
        return (
          <div key={index}>
            <h4>{user}</h4>
          </div>
        );
      })}
    </div>
  );
}

function UserDetailsList() {
  const [dataDetails, setDetails] = useState([
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Doe", age: 22 },
  ]);

  const handleUserDetails = (age) => {
    dataDetails[dataDetails.length - 1].age = age;
    setDetails([...dataDetails]);
  };

  return (
    <div>
      <h4>Array Object</h4>

      <input
        type="text"
        placeholder="enter updated age for last user name"
        onChange={(event) => {
          handleUserDetails(event.target.value);
        }}
      />

      {dataDetails.map((user, index) => {
        return (
          <div key={index}>
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ArrayUpdateDemo;
