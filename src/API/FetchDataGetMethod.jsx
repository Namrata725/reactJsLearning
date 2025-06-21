import { useEffect, useState } from "react";
import "./style.css";
function FetchDataGetMethod() {
  const [userData, setUserData] = useState([]);

  async function getUserData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    setUserData(response.users);
  }

  console.log(userData);
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <h4>Fetch Data Get Method</h4>

      <ul className="user-list">
        <li>
          <b>first Name</b>
        </li>
        <li>
          <b>Last Name</b>
        </li>

        <li>
          <b>Age</b>
        </li>
      </ul>
      {userData &&
        userData.map((user) => {
          return (
            <ul key={user.id} className="user-list">
              <li>{user.firstName}</li>
              <li>{user.lastName}</li>

              <li>{user.age}</li>
            </ul>
          );
        })}
    </div>
  );
}

export default FetchDataGetMethod;
