import React, { Suspense, use } from "react";

const fetchData = () =>
  fetch("https://dummyjson.com/users").then((res) => res.json());
const userResource = fetchData();

function UseAPIDemo() {
  return (
    <div>
      <h4>use API</h4>
      <Suspense fallback={<p>Loading...</p>}>
        <User userResource={userResource} />
      </Suspense>
    </div>
  );
}

export default UseAPIDemo;

const User = ({ userResource }) => {
  const UserData = use(userResource);
  console.log(UserData.users);

  return (
    <div>
      <h4>Users-list</h4>
      {UserData.users.map((user, index) => {
        return (
          <div key={index}>
            <p>
              <strong>First Name: </strong>
              {user.firstName}
            </p>{" "}
            <p>
              <strong>Last Name:</strong> {user.lastName}
            </p>
          </div>
        );
      })}
    </div>
  );
};
