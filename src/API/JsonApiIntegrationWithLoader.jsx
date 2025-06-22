import { useEffect, useState } from "react";
import "./style.css";

export default function JsonApiIntegrationWithLoader() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUserData = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const deleteUser = async (id) => {
    const url = `http://localhost:3000/users/${id}`;
    let response = await fetch(url, {
      method: "DELETE",
    });
    response = await response.json();
    getUserData();
  };
  return (
    <div>
      {/* <h2>integrate json server API and loader</h2> */}
      <h2>User-List</h2>
      <ul className="user-list">
        <li>S.N</li>
        <li>Name</li>
        <li>Email</li>
        <li>Age</li>
        <li>Action</li>
      </ul>

      {!loading ? (
        userData.map((user, index) => (
          <div key={index}>
            <ul className="user-list">
              <li>{index + 1}</li>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.age}</li>
              <li>
                <button
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}
